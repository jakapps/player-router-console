import { FC } from "react";

interface IInfoBoxProps {
    label: any,
    children?: any
};

const InfoBox:FC<IInfoBoxProps> = ({ label, children }) => {
    
    return (
        <div className="bg-white border-2 border-blue-500 rounded flex">
            <div className="bg-blue-500 p-2 text-gray-100">
                {label}
            </div>
            <div className="p-2">
                {children}
            </div>
        </div>
    )
};

export { InfoBox };
