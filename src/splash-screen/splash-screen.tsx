import { FC, useState, useContext } from "react";
import { Redirect } from "react-router-dom";

import { Login } from "../login";
import { UserContext } from "../contexts/user";
import { WebsocketContext } from "../contexts/websocket";

import { ILoginSubmitData } from '../interfaces';

const SplashScreen: FC = () => {

    const { username } = useContext(UserContext);
    const { attemptConnect } = useContext(WebsocketContext);

    const [loading, setLoading] = useState(false);
    const [urlError, setUrlError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const submit = async ({ url, username, password }: ILoginSubmitData) => {

        if(loading) {
            return;
        }

        setUrlError('');
        setUsernameError('');
        setPasswordError('');

        if(!url) {
            setUrlError("Enter a URL for Player Router server");
            return;
        }

        if(!username) {
            setUsernameError("Enter a valid username");
            return;
        }

        if(!password) {
            setPasswordError("Enter a password");
            return;
        }

        setLoading(true);

        let errors = await attemptConnect(url, username, password);

        if(errors.url) {
            setUrlError(errors.url);
        }

        if(errors.username) {
            setUsernameError(errors.username);
        }

        if(errors.password) {
            setPasswordError(errors.password);
        }

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
                    urlError={urlError}
                    usernameError={usernameError}
                    passwordError={passwordError}
                    onSubmit={(data) => submit(data)}
                />
                <div className="flex-grow"></div>
            </div>

            <div className="flex-grow"></div>

        </div>
    );
};

export default SplashScreen;
