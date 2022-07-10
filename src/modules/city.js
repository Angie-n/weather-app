let list = [];

class City {
    constructor(name, country, timezone, forecasts) {
        this.name = name;
        this.country = country;
        this.timezone = timezone;
        this.forecasts = forecasts;
        list.push(this);
    }
}

export {City, list};