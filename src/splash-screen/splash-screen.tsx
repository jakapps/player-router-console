import { FC, useState, useContext } from "react";

import { Login } from "../login";
import { UserContext } from "../contexts/user";

import { ILoginSubmitData } from '../interfaces';

const SplashScreen: FC = () => {

    const [loading, setLoading] = useState(true);
    const { username, setUsername } = useContext(UserContext);

    setTimeout(() => {
        setLoading(false);
    }, 3000);

    const submit = ({ url, username, password }: ILoginSubmitData) => {

        if(loading) {
            return;
        }

        setLoading(true);

        setTimeout(() => {

            if(username) {
                setUsername(username);
            };

            setLoading(false);
        }, 2000);
    }

    return (
        <div className="flex flex-col h-full">

            <div className="flex-grow"></div>

            <div className="flex">
                <div className="flex-grow"></div>
                <Login
                    loading={loading}
                    onSubmit={(data) => submit(data)}
                />
                <div className="flex-grow"></div>
            </div>

            <div className="flex-grow"></div>

        </div>
    );
};

export default SplashScreen;
