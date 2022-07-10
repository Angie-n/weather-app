import * as CityModule from "./city.js";
import * as ForecastModule from "./forecast.js";

const extractRelevantData = jsonData => {
    let cityInfo = jsonData.city;
    let forecasts = [];
    jsonData.list.forEach(forecast => {
        let main = {};
        for(const prop in forecast.main) if(prop === "feels_like" || prop === "humidity" || prop === "temp" || prop === "temp_max" || prop === "temp_min") main[prop] = forecast.main[prop];
        let newForecast = new ForecastModule.Forecast(forecast.dt_txt, forecast.dt, main, forecast.weather[0], forecast.wind.speed);
        forecasts.push(newForecast);
    });
    let newestCity = new CityModule.City(cityInfo.name, cityInfo.country, cityInfo.timezone, forecasts);
    return newestCity;
}


const fetchData = async (city) => {
    try {
        const data = await fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=e8952667fc2af0fa9af21038fce9b156");
        const jsonData = await data.json();
        const relevantData = extractRelevantData(jsonData);
        return relevantData;
    } catch(err) {
        console.log(err);
    }
}


export {fetchData, extractRelevantData};