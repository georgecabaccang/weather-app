import axios from "axios";
import { IForecast } from "../contexts/weatherForecast";

interface IForecastDetails extends IForecast {
    latitud: number;
    longitud: number;
}

export async function getCoordinates(city: string) {
    try {
        const cities: IForecastDetails[] = [];

        const { data } = await axios.get(
            `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=82577b96c5e1b7499de7fe46c36d3f4a`
        );

        if (data.length === 0) return;

        for (let i = 0; i < data.length; i++) {
            const city = {
                name: data[i].name,
                state: data[i].state,
                country: data[i].country,
                latitud: data[i].lat,
                longitud: data[i].lon,
            };

            cities.push(city);
        }
        const detailsPerCity = (await getWeatherForecast(cities)) as IForecastDetails[] | undefined;

        return detailsPerCity;
    } catch (error) {
        if (error) {
            return;
        }
    }
}

async function getWeatherForecast(cities: IForecastDetails[]) {
    try {
        const forecastDetails = [];

        for (let i = 0; i < cities.length; i++) {
            const latitude = cities[i].latitud.toFixed(2);
            const longitude = cities[i].longitud.toFixed(2);

            // get forecast of city through lat and lon, which where first requested through Geocoding API
            // which is then passed as arguments by getCoordinates function
            const { data } = await axios.get(
                `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=82577b96c5e1b7499de7fe46c36d3f4a&units=imperial`
            );

            // loop through returned data.list of forecasts (which is every 3 hours)
            // get forecast only for 09:00 of the next day
            // if time of day is still before 09:00, get forecast for current day
            for (let j = 0; j < data.list.length; j++) {
                if (data.list[j].dt_txt.includes("09:00")) {
                    const details = {
                        name: cities[i].name,
                        state: cities[i].state,
                        country: cities[i].country,
                        forecastForTheDay: {
                            temp: data.list[j].main.temp,
                            description: data.list[j].weather[0].description,
                            main: data.list[j].weather[0].main,
                            pressure: data.list[j].main.pressure,
                            humidity: data.list[j].main.humidity,
                            date: data.list[j].dt,
                        },
                    };

                    forecastDetails.push(details);
                    break;
                }
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
