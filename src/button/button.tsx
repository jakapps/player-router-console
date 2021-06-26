import { FC } from "react";

interface ButtonProps {
    click: () => void
};

const Button: FC<ButtonProps> = ({ click, children }) => {

    return (
        <button
            className="w-full bg-blue-600 text-blue-100 p-2 rounded"
            onClick={() => click()}>
            {children}
        </button>
    )
};

export default Button;
