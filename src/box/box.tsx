import { FC } from "react";

interface BoxProps {
    title?: string,
    children?: any,
    collapsed: boolean
};

const Box: FC<BoxProps> = ({ children, collapsed, title }) => {

    const displayTitle = (
        <div className="p-4 text-gray-600 text-xl flex">
            <div className="flex-grow"></div>
            {title}
            <div className="flex-grow"></div>
        </div>
    );

    return (
        <div className={`bg-gray-100 border-2 border-blue-500 rounded shadow-xl ${collapsed? 'spinning' : 'expanding'}`}>
            <div className={`${collapsed ? 'collapsed' : ''}`}>
                {title && displayTitle}
                <div className="p-4">
                    {children}
                </div>
            </div>
        </div>
    );
};

export { Box };
