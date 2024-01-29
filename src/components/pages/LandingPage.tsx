import { useContext } from "react";
import ButtonComp from "../ui/ButtonComp";
import { AuthContext } from "../../contexts/user";

export default function LandingPage() {
    const { loginWithRedirect } = useContext(AuthContext);

    return (
        <div className="xxxs:pt-[5rem] md:pt-[8rem] xxxl:pt-[13rem] flex justify-center pt-[13rem] ">
            <div className="xxxs:w-[85%] xxxs:text-[1em] md:text-[1.4rem] lg:w-[70%] xxxl:w-[60%] xxxl:text-[1.6rem] xxxxl:text-[1.8rem] xxxxl:w-[55%] flex flex-col gap-10 w-[50%] text-[1.2rem]">
                {/* start of paragraph */}
                <div>
                    <p>
                        Welcome to the weather forecast web application. Please login with your
                        Github user to use the application and view the weather in your city.
                    </p>
                </div>
                {/* end of paragraph */}

                {/* start of login button */}
                <div>
                    <ButtonComp name="Login" clickFn={loginWithRedirect} />
                </div>
                {/* end  of login button */}
            </div>
        </div>
    );
}
