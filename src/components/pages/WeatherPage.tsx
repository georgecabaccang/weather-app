import { useContext } from "react";
import { ForecastContext } from "../../contexts/weatherForecast";
import ButtonComp from "../ui/ButtonComp";
import { useNavigate } from "react-router-dom";
import { timeConverter } from "../../helpers/TimeFormat";

export default function WeatherPage() {
    const { forecasts } = useContext(ForecastContext);
    const navigate = useNavigate();

    return (
        <div className="flex justify-center pt-[8rem] flex-col items-center gap-10">
            <table className="flex flex-col w-[75%] text-[1em] items-center shadow-lg">
                {/* start of table header */}
                <tr className="flex w-[100%] justify-center text-center font-bold ">
                    <td className="w-[13%] border-t border-r border-l rounded-tl-md border-black">
                        City
                    </td>
                    <td className="w-[13%] border-t border-r border-black">State</td>
                    <td className="w-[11%] border-t border-r border-black">Country</td>
                    <td className="w-[16%] border-t border-r border-black">Date (dd/mm/yyyy)</td>
                    <td className="w-[11%] border-t border-r border-black">Temperature</td>
                    <td className="w-[11%] border-t border-r border-black">Description</td>
                    <td className="w-[8%] border-t border-r border-black">Main</td>
                    <td className="w-[9%] border-t border-black">Pressure</td>
                    <td className="w-[8%] border-t border-r border-l rounded-tr-md border-black">
                        Humidity
                    </td>
                </tr>
                {/* end of table header */}

                {/* start of data */}
                {forecasts.map((forecast, index) => {
                    return (
                        <tr
                            className={`flex w-[100%] justify-center text-center ${
                                index % 2 === 0 ? "bg-gray-200" : "bg-gray-50"
                            }`}
                        >
                            <td
                                className={`py-2 w-[13%] border-t border-r border-l border-black ${
                                    forecasts.length - 1 === index ? "border-b rounded-bl-md" : ""
                                }`}
                            >
                                {forecast.name}
                            </td>
                            <td
                                className={`py-2 w-[13%] border-t border-r border-black ${
                                    forecasts.length - 1 === index ? "border-b" : ""
                                }`}
                            >
                                {forecast.state}
                            </td>
                            <td
                                className={`py-2 w-[11%] border-t border-r border-black ${
                                    forecasts.length - 1 === index ? "border-b" : ""
                                }`}
                            >
                                {forecast.country}
                            </td>
                            <td
                                className={`py-2 w-[16%] border-t border-r border-black ${
                                    forecasts.length - 1 === index ? "border-b" : ""
                                }`}
                            >
                                {timeConverter(forecast.forecastForTheDay.date)}
                            </td>
                            <td
                                className={`py-2 w-[11%] border-t border-r border-black ${
                                    forecasts.length - 1 === index ? "border-b" : ""
                                }`}
                            >
                                {forecast.forecastForTheDay.temp}
                            </td>
                            <td
                                className={`py-2 w-[11%] border-t border-r border-black ${
                                    forecasts.length - 1 === index ? "border-b" : ""
                                }`}
                            >
                                {forecast.forecastForTheDay.description}
                            </td>
                            <td
                                className={`py-2 w-[8%] border-t border-r border-black ${
                                    forecasts.length - 1 === index ? "border-b" : ""
                                }`}
                            >
                                {forecast.forecastForTheDay.main}
                            </td>
                            <td
                                className={`py-2 w-[9%] border-t border-black ${
                                    forecasts.length - 1 === index ? "border-b" : ""
                                }`}
                            >
                                {forecast.forecastForTheDay.pressure}
                            </td>
                            <td
                                className={`py-2 w-[8%] border-t border-r border-l  border-black ${
                                    forecasts.length - 1 === index ? "border-b rounded-br-md" : ""
                                }`}
                            >
                                {forecast.forecastForTheDay.humidity}
                            </td>
                        </tr>
                    );
                })}
                {/* end of data */}
            </table>
            <div>
                <ButtonComp
                    name="Back To Search"
                    clickFn={() => {
                        navigate("/home");
                    }}
                />
            </div>
        </div>
    );
}
