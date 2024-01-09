import ButtonComp from "../ui/ButtonComp";

export default function LoggedInPage() {
    return (
        <div className="flex justify-center pt-[8rem]">
            <div className="flex flex-col gap-10 w-[50%] text-[1.2rem] items-center">
                <div className="flex flex-col items-center gap-5">
                    <h1>{"Name"}</h1>
                    <h2>{"user github url"}</h2>
                </div>
                <form className="flex flex-col w-[50%] justify-center items-center gap-5">
                    <input
                        className="border border-black px-9 rounded-[5rem] h-[2em] w-[90%] text-[0.9em]"
                        type="text"
                        placeholder="City"
                    />
                    <div className="flex justify-center w-[15em] text-[0.9em]">
                        <ButtonComp name="Display Weather" clickFn={() => {}} />
                    </div>
                </form>
            </div>
        </div>
    );
}
