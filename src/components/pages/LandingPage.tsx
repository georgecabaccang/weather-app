import ButtonComp from "../ui/ButtonComp";

export default function LandingPage() {
    return (
        <div className="flex justify-center pt-[13rem]">
            <div className="flex flex-col gap-10 w-[50%] text-[1.2rem]">
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
                    <ButtonComp name="Login" clickFn={() => {}} />
                </div>
                {/* end  of login button */}
            </div>
        </div>
    );
}
