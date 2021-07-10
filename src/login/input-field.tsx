import { FC } from "react";
import { IInputFieldProps } from "../interfaces";

const InputField: FC<IInputFieldProps> = ({
    name,
    title,
    placeholder,
    onChange,
    error,
    type }) => {

    let titleClasses = error ? 'text-red-600' : '';
    let inputClasses = error ? 'border-red-600': 'border-blue-500';

    return (
        <>
            <div className={`pb-1 ${titleClasses}`}>{error || title}</div>
            <input
                type={type ? type : 'text' }
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className={`w-full p-2 rounded outline-none border-2 ${inputClasses}`}
                aria-label={`${name}-input`}
            />
        </>
    )
};

export { InputField };
