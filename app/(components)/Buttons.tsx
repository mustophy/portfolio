export function Button({ title, handleClick, buttonType, className }: ButtonInterface) {
    return (
        <button className={`outline-none text-white px-2 py-1 border border-primary flex items-center gap-x-1 ${className}`} onClick={() => handleClick()}>
            <p className="text-white font-[500]">{title}</p>
            <p className="text-white font-[500]">
                {buttonType == 'live' ? '<~>' : null}
                {buttonType == 'cached' ? '>=' : null}
            </p>
        </button>
    )
}



interface ButtonInterface {
    title: string;
    className?: string;
    handleClick: () => void;
    buttonType?: 'live' | 'cached'
}