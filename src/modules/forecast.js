class Forecast {
    constructor(time, dt, main, weather, windSpeed) {
        this.time = time;
        this.dt = dt;
        this.main = main;
        this.weather = weather;
        this.windSpeed = windSpeed;
    }
}

export {Forecast};