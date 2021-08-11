import { FC, useState, KeyboardEvent } from "react";
import { Button } from "../button";
import { Box } from "../box";
import { InputField } from "./input-field";

import { ILoginProps } from "../interfaces";

const Login: FC<ILoginProps> = ({
    onSubmit,
    urlError,
    usernameError,
    passwordError,
    loading }) => {

    const [url, setUrl] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submit = () => {

        onSubmit({
            url,
            username,
            password
        });
    };

    const keyDownHandler = (event: KeyboardEvent) => {

        if(event.key === "Enter") {
            submit();
        }
    };

    return (
        <Box collapsed={loading} title="Login">
            <div
                className="p-4"
                aria-label="login-box"
                onKeyUp={keyDownHandler}>
                <div className="pb-8">
                    <InputField
                        name="url"
                        error={urlError}
                        title="Player Router Server"
                        placeholder="Eg wss://server.playerrouter.com"
                        onChange={(value: string) => setUrl(value)}
                    />
                </div>
                <div className="flex w-full">
                    <div className="w-1/2 pr-2">
                        <InputField
                            name="username"
                            error={usernameError}
                            title="Username"
                            placeholder="Eg admin"
                            onChange={(value: string) => setUsername(value)}
                        />
                    </div>
                    <div className="w-1/2 pl-2">
                        <InputField
                            name="password"
                            error={passwordError}
                            title="Password"
                            type="password"
                            onChange={(value: string) => setPassword(value)}
                        />
                    </div>
                </div>
                <div className="pt-4">
                    <Button click={() => submit()}>Login</Button>
                </div>
            </div>
        </Box>
    );
};

export {
    Login
};
