import { useContext } from "react";
import ButtonComp from "../ui/ButtonComp";
import { AuthContext } from "../../contexts/user";
import { getCoordinates } from "../../requests/weatherForecast";

export default function LoggedInPage() {
    const { user } = useContext(AuthContext);

    function handleSearchWeatherForecast() {
        event?.preventDefault();
        getCoordinates();
    }

    return (
        <div className="flex justify-center pt-[8rem]">
            <div className="flex flex-col gap-10 w-[50%] text-[1.2rem] items-center">
                {user ? (
                    <div className="flex flex-col items-center gap-5">
                        <h1>{user?.name ? user?.name : user?.nickname}</h1>
                        <h2>{`https://github.com/${user?.nickname}`}</h2>
                    </div>
                ) : null}
                <form className="flex flex-col w-[50%] justify-center items-center gap-5">
                    <input
                        className="border border-black px-9 rounded-[5rem] h-[2em] w-[90%] text-[0.9em]"
                        type="text"
                        placeholder="City"
                    />
                    <div className="flex justify-center w-[15em] text-[0.9em]">
                        <ButtonComp name="Display Weather" clickFn={handleSearchWeatherForecast} />
                    </div>
                </form>
            </div>
        </div>
    );
}
