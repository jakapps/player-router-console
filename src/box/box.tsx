import { FC } from "react";

interface BoxProps {
    children?: any,
    collapsed: boolean
};

const Box: FC<BoxProps> = ({ children, collapsed }) => {

    return (
        <div className={`bg-gray-100 p-4 border-2 border-blue-500 rounded shadow-xl ${collapsed? 'spinning' : 'expanding'}`}>
            <div className={`${collapsed ? 'collapsed' : ''}`}>
                {children}
            </div>
        </div>
    );
};

export { Box };
