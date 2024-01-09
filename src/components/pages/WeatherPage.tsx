import { useContext } from "react";
import { ForecastContext } from "../../contexts/weatherForecast";
import ButtonComp from "../ui/ButtonComp";
import { useNavigate } from "react-router-dom";
import { timeConverter } from "../../helpers/TimeFormat";

export default function WeatherPage() {
    const { forecasts } = useContext(ForecastContext);
    const navigate = useNavigate();

    return (
        <div className="xxxs:pt-[5rem] xxxl:pt-[10rem] flex justify-center pt-[8rem] flex-col items-center xxxl:text-[1.3rem] gap-10">
            <table className="xxxs:w-[95%] xxxs:text-[0.6rem] md:text-[0.7rem] xl:text-[0.8rem] xl:w-[80%] xxxl:text-[1rem] flex flex-col w-[75%] text-[1em] items-center shadow-lg">
                <tbody className="w-[100%]">
                    {/* start of table header */}
                    <tr className="flex w-[100%] justify-center text-center font-bold ">
                        <td className="xxxs:w-[20%] md:w-[13%] border-t border-r border-l rounded-tl-md border-black">
                            City
                        </td>
                        <td className="xxxs:w-[20%] md:w-[13%] border-t border-r border-black">
                            State
                        </td>
                        <td className="xxxs:w-[16%] md:w-[11%] border-t border-r border-black">
                            Country
                        </td>
                        <td className="xxxs:w-[28%] md:w-[16%] border-t border-r border-black">
                            Date (dd/mm/yyyy)
                        </td>
                        <td className="xxxs:w-[16%] xxxs:rounded-tr-md md:rounded-none w-[11%] border-t border-r border-black">
                            Temp(F)
                        </td>
                        <td className="xxxs:hidden md:block md:w-[11%] border-t border-r border-black">
                            Description
                        </td>
                        <td className="xxxs:hidden md:block md:w-[8%] border-t border-r border-black">
                            Main
                        </td>
                        <td className="xxxs:hidden md:block md:w-[9%] border-t border-black">
                            Pressure
                        </td>
                        <td className="xxxs:hidden md:block md:w-[8%] border-t border-r border-l rounded-tr-md border-black">
                            Humidity
                        </td>
                    </tr>
                    {/* end of table header */}

                    {/* start of data */}
                    {forecasts.map((forecast, index) => {
                        return (
                            <tr
                                key={index}
                                className={`flex w-[100%] justify-center text-center ${
                                    index % 2 === 0 ? "bg-gray-200" : "bg-gray-50"
                                }`}
                            >
                                <td
                                    className={`xxxs:w-[20%] py-2 md:w-[13%] border-t border-r border-l border-black ${
                                        forecasts.length - 1 === index
                                            ? "border-b rounded-bl-md"
                                            : ""
                                    }`}
                                >
                                    {forecast?.name}
                                </td>
                                <td
                                    className={`xxxs:w-[20%] py-2 md:w-[13%] border-t border-r border-black ${
                                        forecasts.length - 1 === index ? "border-b" : ""
                                    }`}
                                >
                                    {forecast?.state}
                                </td>
                                <td
                                    className={`xxxs:w-[16%] py-2 md:w-[11%] border-t border-r border-black ${
                                        forecasts.length - 1 === index ? "border-b" : ""
                                    }`}
                                >
                                    {forecast?.country}
                                </td>
                                <td
                                    className={`xxxs:w-[28%] py-2 md:w-[16%] border-t border-r border-black ${
                                        forecasts.length - 1 === index ? "border-b" : ""
                                    }`}
                                >
                                    {timeConverter(forecast.forecastForTheDay!.date)}
                                </td>
                                <td
                                    className={`xxxs:w-[16%] py-2 md:w-[16%] border-t border-r border-black ${
                                        forecasts.length - 1 === index
                                            ? "xxxs:rounded-br-md md:rounded-none border-b"
                                            : ""
                                    }`}
                                >
                                    {forecast.forecastForTheDay?.temp}
                                </td>
                                <td
                                    className={`xxxs:hidden py-2 md:block md:w-[11%] border-t border-r border-black ${
                                        forecasts.length - 1 === index ? "border-b" : ""
                                    }`}
                                >
                                    {forecast.forecastForTheDay?.description}
                                </td>
                                <td
                                    className={`xxxs:hidden py-2 md:block md:w-[8%] border-t border-r border-black ${
                                        forecasts.length - 1 === index ? "border-b" : ""
                                    }`}
                                >
                                    {forecast.forecastForTheDay?.main}
                                </td>
                                <td
                                    className={`xxxs:hidden py-2 md:block md:w-[9%] border-t border-black ${
                                        forecasts.length - 1 === index ? "border-b" : ""
                                    }`}
                                >
                                    {forecast.forecastForTheDay?.pressure}
                                </td>
                                <td
                                    className={`xxxs:hidden py-2 md:block md:w-[8%] border-t border-r border-l  border-black ${
                                        forecasts.length - 1 === index
                                            ? "border-b rounded-br-md"
                                            : ""
                                    }`}
                                >
                                    {forecast.forecastForTheDay?.humidity}
                                </td>
                            </tr>
                        );
                    })}
                    {/* end of data */}
                </tbody>
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
