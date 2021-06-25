import { FC, useState, useContext } from "react";

import { Login } from "../login";
import { UserContext } from "../contexts/user";

const SplashScreen: FC = () => {

    const [loading, setLoading] = useState(true);
    const { username, setUsername } = useContext(UserContext);

    setTimeout(() => {
        setLoading(false);
    }, 3000);

    setUsername('herp')

    return (
        <div className="flex flex-col h-full">

            <div className="flex-grow"></div>

            <div className="flex">
                <div className="flex-grow"></div>
                {username}
                <Login
                    loading={loading}
                    onSubmit={(data) => console.log('submit')}
                />
                <div className="flex-grow"></div>
            </div>

            <div className="flex-grow"></div>

        </div>
    );
};

export default SplashScreen;
