import React, { ReactNode, SetStateAction, createContext, useState } from "react";

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
    setForecasts: React.Dispatch<SetStateAction<IForecast[]>>;
    forecasts: IForecast[];
}

export const ForecastContext = createContext<IForecastValue>({
    setForecasts: () => {},
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

    const ForecastContextValues: IForecastValue = { forecasts, setForecasts };

    return (
        <ForecastContext.Provider value={ForecastContextValues}>
            {props.children}
        </ForecastContext.Provider>
    );
};
