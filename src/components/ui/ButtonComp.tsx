interface IButtonCompProps {
    name: string;
    clickFn: () => void;
}

export default function ButtonComp({ name, clickFn }: IButtonCompProps) {
    return (
        <>
            <button
                className="border-black border h-auto w-auto px-3 py-1 rounded"
                onClick={() => clickFn()}
            >
                {name}
            </button>
        </>
    );
}
