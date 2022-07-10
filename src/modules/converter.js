let isMetric = true;
function getIsMetric() {return isMetric;}
function setIsMetric(m) {isMetric = m;}

class TemperatureConverter {
    static kelvinToCelsius(k) {
        let c = k - 273.15;
        return Math.round(c);
    }
    static kelvinToFahrenheit(k) {
        let f = (k - 273.15) * (9/5) + 32;
        return Math.round(f);
    }
}

class SpeedConverter {
    static mpsToMiph(mps) {
        let miph = mps * 0.000621371 * 3600;
        return miph.toFixed(2);
    }
}

//Pass Date objects
class DateConverter {

    static getShiftedHour(date, timezone) {
        let num = date.getUTCHours();

        let hourShift = timezone / 60 / 60;
        num = num + hourShift;
        if(num < 0) num = 24 + num;

        let abb;
        if (num > 11 && num < 24) abb = "PM";
        else abb = "AM";

        num = num % 12;
        if (num == 0) num = 12;

        return num + " " + abb;
    }

    static getShiftedDayOfWeek(date, timezone) {
        let dayOfWeek = date.getUTCDay();
        let currentHour = date.getUTCHours() + (timezone / 60 / 60);
        let dayShift = 0;
        if (currentHour < 0) dayShift = -1;
        else if (currentHour > 23) dayShift = 1;
        let shiftedDayOfWeek = dayOfWeek + dayShift;
        if(shiftedDayOfWeek < 0) shiftedDayOfWeek = 7 + shiftedDayOfWeek;
        else if (shiftedDayOfWeek > 6) shiftedDayOfWeek -= 7;
        return shiftedDayOfWeek;
    }

    static dayOfWeekToStr(dayOfWeek) {
        let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        return daysOfWeek[dayOfWeek];
    }
    
    static getShiftedDayOfMonth(date, timezone) {
        let dayOfMonth = date.getUTCDate();
        let currentHour = date.getUTCHours() + (timezone / 60 / 60);
        let dayShift = 0;
        if (currentHour < 0) dayShift = -1;
        else if (currentHour > 23) dayShift = 1;
        return dayOfMonth + dayShift;
    }
    
}

export {getIsMetric, setIsMetric, TemperatureConverter, SpeedConverter, DateConverter};

