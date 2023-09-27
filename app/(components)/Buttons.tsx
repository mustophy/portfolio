export function Button({ title, handleClick, buttonType, className }: ButtonInterface) {
    return (
        <button className={`outline-none text-white px-2 py-1 border border-primary flex items-center gap-x-2 ${className}`} >
            <p style={{ wordSpacing: '6px'}} className="text-white font-[500]">{title}</p>
            <p className="text-white font-[500]">
                {buttonType == 'Live' ? '<~>' : null}
                {buttonType == 'Cached' ? '>=' : null}
            </p>
        </button>
    )
}



interface ButtonInterface {
    title: string;
    className?: string;
    handleClick?: () => void;
    buttonType?: 'Live' | 'Cached'
}