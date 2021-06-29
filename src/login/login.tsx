import { FC, useState } from "react";
import { Button } from "../button";
import { Box } from "../box";
import {
    IInputFieldProps,
    ILoginProps
} from "../interfaces";

const InputField: FC<IInputFieldProps> = ({ name, title, placeholder, onChange, error }) => {

    let titleClasses = error ? 'text-red-600' : '';
    let inputClasses = error ? 'border-red-600': 'border-blue-500';

    return (
        <>
            <div className={`pb-1 ${titleClasses}`}>{error || title}</div>
            <input
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className={`w-full p-2 rounded outline-none border-2 ${inputClasses}`}
                aria-label={`${name}-input`}
            />
        </>
    )
};

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

    return (
        <Box collapsed={loading} title="Login">
            <div className="p-4">
                <div className="pb-4">
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
