import { ReactNode, createContext, useEffect, useState } from "react";

export interface IForecast {
    country: string;
    name: string;
    state: string;
    forecastForTheDay?: {
        temp: number;
        description: string;
        main: string;
        pressure: number;
        humidity: number;
        date: number;
    };
}

interface IForecastValue {
    saveForecastData: (forecasts: IForecast[]) => void;
    forecasts: IForecast[];
}

export const ForecastContext = createContext<IForecastValue>({
    saveForecastData: () => {},
    forecasts: [
        {
            country: "",
            name: "",
            state: "",
            forecastForTheDay: {
                temp: 0,
                description: "",
                main: "",
                pressure: 0,
                humidity: 0,
                date: 0,
            },
        },
    ],
});

export const ForecastProvider = (props: { children: ReactNode }) => {
    const [forecasts, setForecasts] = useState<IForecast[]>([]);

    function saveForecastData(forecasts: IForecast[]) {
        setForecasts(forecasts);
        localStorage.setItem("forecasts", JSON.stringify(forecasts));
        console.log(localStorage.getItem("forecasts"));
    }

    useEffect(() => {
        const savedForecasts = localStorage.getItem("forecasts");
        if (savedForecasts) {
            setForecasts(JSON.parse(savedForecasts));
        }
    }, []);

    const ForecastContextValues: IForecastValue = { forecasts, saveForecastData };

    return (
        <ForecastContext.Provider value={ForecastContextValues}>
            {props.children}
        </ForecastContext.Provider>
    );
};
