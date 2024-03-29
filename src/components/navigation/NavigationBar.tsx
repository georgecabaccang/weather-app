import BlackCloud from "../../assets/pngs/black-cloud.png";
import ButtonComp from "../ui/ButtonComp";
import { AuthContext } from "../../contexts/user";
import { useContext } from "react";

export default function NavigationBar() {
    const { logoutUser, user } = useContext(AuthContext);

    return (
        <div className="border-b-2 border-black h-[5rem] px-5 flex justify-between shadow-md">
            {/* start of logo and title */}
            <div className="flex items-center gap-5">
                <img src={BlackCloud} className="xxxs:w-[5em] md:w-[6em]" />

                <h1
                    className={`xxxs:text-[1.3em] text-[1.5em] font-semibold ${
                        user ? "xxxs:hidden md:block" : "md:block"
                    }`}
                >
                    Weather Forecast
                </h1>
            </div>
            {/* end of logo and title */}

            {/* start of navigation links */}
            {user ? (
                <div className="flex flex-grow justify-end items-center">
                    <ButtonComp name="Logout" clickFn={logoutUser} />
                </div>
            ) : null}
            {/* end of navigation links */}
        </div>
    );
}
