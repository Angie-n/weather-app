import * as ConverterModule from "./converter.js";
import * as localStorageModule from "./localStorage.js";

//Helper functions
function findMostReoccuringElement(arr) {
    let sortedArr = [...arr].sort();
    let maxCount = 1;
    let mostOccuringElement = sortedArr[0];

    let currentCount = 1;
    let currentElement = sortedArr[0];
    for(let i = 1; i < sortedArr.length; i++) {
        if(sortedArr[i] === currentElement) currentCount++;
        if(sortedArr[i] !== currentElement || i === sortedArr.length - 1) {
            if(maxCount < currentCount) {
                maxCount = currentCount;
                mostOccuringElement = currentElement;
            }
            currentCount = 1;
            currentElement = sortedArr[i];
        }
    }
    return mostOccuringElement;
}

function convertDegrees(temp) {
    if(ConverterModule.getIsMetric()) return ConverterModule.TemperatureConverter.kelvinToCelsius(temp) + "˚C";
    return ConverterModule.TemperatureConverter.kelvinToFahrenheit(temp) + "˚F";
}

function convertSpeed(spd) {
    if(ConverterModule.getIsMetric()) return spd + " m/s";
    return ConverterModule.SpeedConverter.mpsToMiph(spd) + " mi/hr";
}

function checkIfToday(date, timezone) {
    let today = new Date();
    if(ConverterModule.DateConverter.getShiftedDayOfMonth(today, timezone) === ConverterModule.DateConverter.getShiftedDayOfMonth(date, timezone)) return true;
    return false;
}

//Value on left corresponds to icon value from API, value on right corresponds to image path
const iconToBackground = {
    "01d": "../src/assets/images/clear.jpg",
    "01n": "../src/assets/images/clear-n.jpg",
    "02d": "../src/assets/images/few-clouds.jpg",
    "02n": "../src/assets/images/cloudy-n.jpg",
    "03d": "../src/assets/images/scattered-clouds.jpg",
    "03n": "../src/assets/images/cloudy-n.jpg",
    "04d": "../src/assets/images/broken-clouds.jpg",
    "04n": "../src/assets/images/cloudy-n.jpg",
    "09d": "../src/assets/images/shower.jpg",
    "09n": "../src/assets/images/shower-n.jpg",
    "10d": "../src/assets/images/rain.jpg",
    "10n": "../src/assets/images/rain-n.jpg",
    "11d": "../src/assets/images/thunderstorm.jpg",
    "11n": "../src/assets/images/thunderstorm.jpg",
    "13d": "../src/assets/images/snow.jpg",
    "13n": "../src/assets/images/snow-n.jpg",
    "50d": "../src/assets/images/mist.jpg",
    "50n": "../src/assets/images/mist.jpg",
}

const showCity = city => {
    function findCurrentForecast() {
        let currentTime = new Date();
        let currentForecast = city.forecasts[0];
        for(let i = 1; i < city.forecasts.length; i++) {
            let forecastTime = new Date(city.forecasts[i].dt * 1000);
            if(currentTime > forecastTime) currentForecast = city.forecasts[i];
            else {
                indexOfCurrent = i - 1;
                break;
            }
        }
        return currentForecast;
    }

    let indexOfCurrent;
    let currentForecast = findCurrentForecast();

    let highestTemps = [];
    let lowestTemps = [];

    let checkBookmark = () => {
        let bookmarkBtn = document.getElementById("bookmark-btn");
        let bookmarkIcon = bookmarkBtn.getElementsByTagName("i")[0];
        let bookmarkMessage = bookmarkBtn.getElementsByTagName("p")[0];
        let cityNodeList = document.getElementById("saved-cities").getElementsByTagName("li");
        let cityArr = [...cityNodeList].map((c) => c.textContent);
        let index = cityArr.indexOf(city.name);

        if(index !== -1) {
            bookmarkIcon.classList.add("fa-solid");
            bookmarkIcon.classList.remove("fa-regular");
            bookmarkMessage.textContent = "Current city has been bookmarked";
        }
        else {
            bookmarkIcon.classList.remove("fa-solid");
            bookmarkIcon.classList.add("fa-regular");
            bookmarkMessage.textContent = "Bookmark the current city";
        }
    }

    let clearInfo = () => {
        document.getElementById("other-cities").style.display = "none";
        document.getElementById("search-error-msg").textContent = "";
        document.getElementById("forecast-today").innerHTML = "";
        document.getElementById("forecast-week").innerHTML = "";
        checkBookmark();
    }

    let changeCurrentInfo = () => {
        let temp = convertDegrees(currentForecast.main.temp);
        let highTemp = "H: " + convertDegrees(currentForecast.main.temp_max);
        let lowTemp = "L: " + convertDegrees(currentForecast.main.temp_min);
        let feelsLike = convertDegrees(currentForecast.main.feels_like);
        let windSpeed = convertSpeed(currentForecast.windSpeed);

        let weatherImg = iconToBackground[currentForecast.weather.icon];
        document.getElementById("current-info").style.backgroundImage = 'url("' + weatherImg + '")';

        let locationInfo = document.getElementById("location-info");
        locationInfo.getElementsByTagName("h1")[0].textContent = city.name;
        locationInfo.getElementsByTagName("p")[0].textContent = "(" + city.country + ")";

        document.getElementById("current-temp").textContent = temp;
        document.getElementById("high-temp").textContent = highTemp;
        document.getElementById("low-temp").textContent = lowTemp;

        let feelsLikeDiv = document.getElementById("feels-like");
        feelsLikeDiv.getElementsByTagName("p")[1].textContent = feelsLike;
        let windSpeedDiv = document.getElementById("wind-speed");
        windSpeedDiv.getElementsByTagName("p")[1].textContent = windSpeed;
        let humidityDiv = document.getElementById("humidity");
        humidityDiv.getElementsByTagName("p")[1].textContent = currentForecast.main.humidity + "%";
    }

    let changeTodayForecast = () => {
        let todayDiv = document.getElementById("forecast-today");

        //Assumes data is given in chronological order. Adds more from tomorrow's forecast to fill 7 slots if there are not enough for today's.
        for(let i = indexOfCurrent; i < city.forecasts.length; i++) {
            let forecastDate = new Date(city.forecasts[i].dt * 1000);
            if(!checkIfToday(forecastDate, city.timezone) && i - indexOfCurrent >= 8) break;
            else {
                let timeHeader = document.createElement("h3");
                timeHeader.textContent = ConverterModule.DateConverter.getShiftedHour(forecastDate, city.timezone);

                let icon = new Image();
                icon.src = "http://openweathermap.org/img/wn/" + city.forecasts[i].weather.icon + "@2x.png";

                let tempDisplay = document.createElement("p");
                tempDisplay.textContent = convertDegrees(city.forecasts[i].main.temp);
                tempDisplay.classList.add("today-temps");

                let mainWeather = document.createElement("p");
                mainWeather.textContent = city.forecasts[i].weather.main;

                let container = document.createElement("div");
                container.append(timeHeader, icon, tempDisplay, mainWeather);
                if(city.forecasts[i] === currentForecast) container.id = "current-time";
                container.classList.add("today-divs");
                todayDiv.append(container);
            }
        }

    }

    let changeWeekForecast = () => {
        let weekDiv = document.getElementById("forecast-week");

        let priority1 = [];
        let priority2 = [];
        let priority3 = [];
        let priority4 = [];

        function determinePriority(forecast) {
            let weather = forecast.weather.main;
            if (weather === "Thunderstorm" || weather === "Tornado") priority1.push(forecast);
            else if (weather === "Squall" || weather === "Sand" || weather === "Dust" || weather === "Ash" || weather === "Smoke" || weather === "Haze") priority2.push(forecast);
            else if (weather === "Drizzle" || weather === "Rain" || weather === "Snow") priority3.push(forecast);
            else if (weather === "Mist" || weather === "Fog" || weather === "Clear" || weather === "Clouds") priority4.push(forecast);
            else console.log("Unknown weather: " + weather);
        }

        function clearPriorities() {
            priority1 = [];
            priority2 = [];
            priority3 = [];
            priority4 = [];
        }

        function determineMainWeather(priorityArr) {
            for(let i = 0; i < priorityArr.length; i++) {
                if(priorityArr[i].length !== 0) {
                    let weathers = priorityArr[i].map(f => f.weather.main);
                    let mainStr = findMostReoccuringElement(weathers);
                    let mainIcon = priorityArr[i][weathers.indexOf(mainStr)].weather.icon;
                    if(mainIcon.substring(2) === "n") mainIcon = mainIcon.substring(0, 2) + "d";
                    return [mainStr, mainIcon];
                }
            }
            console.log("Unable to determine main weather");
            return -1;
        }

        let earliestDate = new Date(currentForecast.dt * 1000);
        let currentDayOfWeek = ConverterModule.DateConverter.getShiftedDayOfWeek(earliestDate, city.timezone);
        for(let i = indexOfCurrent; i < city.forecasts.length; i++) {
            let forecastDate = new Date(city.forecasts[i].dt * 1000);
            if (currentDayOfWeek === ConverterModule.DateConverter.getShiftedDayOfWeek(forecastDate, city.timezone) && i != city.forecasts.length - 1) determinePriority(city.forecasts[i]);
            else {
                if(i === city.forecasts.length - 1) determinePriority(city.forecasts[i]);

                let dayForecasts = [priority1, priority2, priority3, priority4];
                let timeHeader = document.createElement("h3");
                if(checkIfToday(new Date(city.forecasts[i-1].dt * 1000), city.timezone)) timeHeader.textContent = "Today";
                else timeHeader.textContent = ConverterModule.DateConverter.dayOfWeekToStr(currentDayOfWeek);

                let mainWeather = determineMainWeather(dayForecasts);
                let mostOccuringWeatherIcon = mainWeather[1];
                let icon = new Image(); 
                icon.src = "http://openweathermap.org/img/wn/" + mostOccuringWeatherIcon + "@2x.png";
                let iconText = document.createElement("p");
                iconText.textContent = mainWeather[0];
                let weatherDiv = document.createElement("div");
                weatherDiv.classList.add("week-weather-forecast");
                weatherDiv.append(icon, iconText);

                let lowTemp = document.createElement("p");
                let lowestTemp = Math.min(...dayForecasts.map(p => {
                    return Math.min(...p.map(f => f.main.temp_min));
                })); 
                lowestTemps.push(lowestTemp);
                lowTemp.textContent = convertDegrees(lowestTemp);
                let highTemp = document.createElement("p");
                let highestTemp = Math.max(...dayForecasts.map(p => {
                    return Math.max(...p.map(f => f.main.temp_max));
                })); 
                highestTemps.push(highestTemp);
                highTemp.textContent = convertDegrees(highestTemp);
                let highLowDiv = document.createElement("div");
                highLowDiv.classList.add("week-high-low");
                highLowDiv.append(highTemp, lowTemp);

                let container = document.createElement("div");
                container.append(timeHeader, weatherDiv, highLowDiv);
                weekDiv.append(container);

                currentDayOfWeek = (currentDayOfWeek + 1) % 7;
                clearPriorities();
                determinePriority(city.forecasts[i]);
            }
        }
    }

    let addEvents = () => {
        document.getElementById("unit-btn").onclick = () => {
            if(ConverterModule.getIsMetric()) ConverterModule.setIsMetric(false);
            else ConverterModule.setIsMetric(true);

            document.getElementById("current-temp").textContent = convertDegrees(currentForecast.main.temp);
            document.getElementById("high-temp").textContent = "H: " + convertDegrees(currentForecast.main.temp_max);
            document.getElementById("low-temp").textContent = "L: " + convertDegrees(currentForecast.main.temp_min);

            document.getElementById("feels-like").getElementsByTagName("p")[1].textContent = convertDegrees(currentForecast.main.feels_like);
            document.getElementById("wind-speed").getElementsByTagName("p")[1].textContent = convertSpeed(currentForecast.windSpeed);

            let todayTemps = document.getElementsByClassName("today-temps");
            let forecastIndex = city.forecasts.indexOf(currentForecast)
            for(let i = 0; i < todayTemps.length; i++) {
                todayTemps[i].textContent = convertDegrees(city.forecasts[forecastIndex].main.temp);
                forecastIndex++;
            }

            let weekTemps = document.getElementsByClassName("week-high-low");
            for(let i = 0; i < weekTemps.length; i++) {
                weekTemps[i].getElementsByTagName("p")[0].textContent = convertDegrees(highestTemps[i]);
                weekTemps[i].getElementsByTagName("p")[1].textContent = convertDegrees(lowestTemps[i]);
            }
            localStorageModule.storage().populateStorage();
        };
    }

    let changeAll = () => {
        clearInfo();
        changeCurrentInfo();
        changeTodayForecast();
        changeWeekForecast();
        addEvents();
    }

    return {changeAll};
}

export {showCity};