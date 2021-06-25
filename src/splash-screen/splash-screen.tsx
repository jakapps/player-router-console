import { FC, useState, useContext } from "react";
import { Redirect } from "react-router-dom";

import { Login } from "../login";
import { UserContext } from "../contexts/user";

import { ILoginSubmitData } from '../interfaces';

const SplashScreen: FC = () => {

    const [loading, setLoading] = useState(false);
    const { username, setUsername } = useContext(UserContext);

    const submit = ({ url, username, password }: ILoginSubmitData) => {

        if(loading) {
            return;
        }

        setLoading(true);

        if(username) {
            setUsername(username);
        };

        setLoading(false);
    }

    return (
        <div className="flex flex-col h-full">
            {username ? <Redirect to="/" />: <></>}

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
