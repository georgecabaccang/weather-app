import axios from "axios";

export async function getCoordinates() {
    try {
        const detailsPerCity = [];

        const { data } = await axios.get(
            "http://api.openweathermap.org/geo/1.0/direct?q=london&limit=5&appid=82577b96c5e1b7499de7fe46c36d3f4a"
        );

        if (data.length === 0) return;

        // use for loop since await cannot be used inside a forEach loop
        for (let i = 0; i < data.length; i++) {
            const weatherDetails = await getWeatherForecast(data[i].lon, data[i].lat);
            const forecastForCity = {
                name: data[i].name,
                state: data[i].state,
                country: data[i].country,
                forecastForTheDay: weatherDetails,
            };
            detailsPerCity.push(forecastForCity);
        }

        return detailsPerCity;
    } catch (error) {
        if (error) {
            return;
        }
    }
}

async function getWeatherForecast(lat: number, lon: number) {
    try {
        const latitude = lat.toFixed(2);
        const longitude = lon.toFixed(2);
        const forecastDetails = {};

        // get forecast of city through lat and lon, which where first requested through Geocoding API
        // which is then passed as arguments by getCoordinates function
        const { data } = await axios.get(
            `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=82577b96c5e1b7499de7fe46c36d3f4a&units=imperial`
        );

        // loop through returned data.list of forecasts (which is every 3 hours)
        // get forecast only for 09:00 of the next day
        // if time of day is still before 09:00, get forecast for current day
        for (let i = 0; i < data.list.length; i++) {
            if (data.list[i].dt_txt.includes("09:00")) {
                const details = {
                    temp: data.list[i].main.temp,
                    description: data.list[i].weather[0].description,
                    main: data.list[i].weather[0].main,
                    pressure: data.list[i].main.pressure,
                    humidity: data.list[i].main.humidity,
                    date: data.list[i].dt,
                };

                Object.assign(forecastDetails, details);
                break;
            }
        }
        // return forecastDetails to getCoordinates function for the current/next day for 09:00
        return forecastDetails;
    } catch (error) {
        if (error) {
            return;
        }
    }
}
