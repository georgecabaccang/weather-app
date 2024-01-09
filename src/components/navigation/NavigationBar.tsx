import { Link } from "react-router-dom";
import BlackCloud from "../../assets/pngs/black-cloud.png";

export default function NavigationBar() {
    return (
        <div className="border-b-2 border-black h-[5rem] px-5 flex justify-between shadow-md">
            {/* start of logo and title */}
            <div className="flex items-center gap-5">
                <img src={BlackCloud} className="w-[6em]" />
                <h1 className="text-[1.5em] font-semibold">Weather Forcast</h1>
            </div>
            {/* end of logo and title */}

            {/* start of navigation links */}
            <div className="flex flex-grow justify-end items-center">
                <button className="border-black border h-auto w-auto px-3 py-1 rounded">
                    Logout
                </button>
            </div>
            {/* end of navigation links */}
        </div>
    );
}
