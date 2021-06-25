import { FC, useState } from "react";
import { Login } from "../login";

const SplashScreen: FC = () => {

    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 3000);

    return (
        <div className="flex flex-col h-full">

            <div className="flex-grow"></div>

            <div className="flex">
                <div className="flex-grow"></div>
                <Login
                    loading={loading}
                    onSubmit={() => console.log('submit')}
                />
                <div className="flex-grow"></div>
            </div>

            <div className="flex-grow"></div>

        </div>
    );
};

export default SplashScreen;
