import { FC, useState } from "react";

interface InputFieldProps {
    name: string,
    title: string,
    placeholder?: string
    onChange: (value: string) => void
};

const InputField: FC<InputFieldProps> = ({ name, title, placeholder, onChange }) => {

    return (
        <>
            <div className="pb-1">{title}</div>
            <input
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="w-full p-2 rounded outline-none border-2 border-blue-500"
                aria-label={`${name}-input`}
            />
        </>
    )
};

interface ButtonProps {
    click: () => void
};

const Button: FC<ButtonProps> = ({ click, children }) => {

    return (
        <button
            className="w-full bg-blue-600 text-blue-100 p-2 rounded"
            onClick={() => click()}>
            {children}
        </button>
    )
};

interface LoginProps {
    onSubmit: (args: { url: string, username?: string, password?: string}) => void
};

const Login: FC<LoginProps> = ({ onSubmit }) => {

    const [url, setUrl] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submit = () => {

        if(!url) {
            return;
        }

        let vals: any = { url };

        if(username && password) {
            vals.username = username;
            vals.password = password;
        }

        onSubmit(vals);
    };

    return (
        <div className="bg-gray-100 p-4 border-2 border-blue-500 rounded">
            <div className="pb-4">
                <InputField
                    name="url"
                    title="Player Router Server"
                    placeholder="Eg wss://server.playerrouter.com"
                    onChange={(value: string) => setUrl(value)}
                />
            </div>
            <div className="flex w-full">
                <div className="w-1/2 pr-2">
                    <InputField
                        name="username"
                        title="Username"
                        placeholder="Eg admin"
                        onChange={(value: string) => setUsername(value)}
                    />
                </div>
                <div className="w-1/2 pl-2">
                    <InputField
                        name="password"
                        title="Password"
                        onChange={(value: string) => setPassword(value)}
                    />
                </div>
            </div>
            <div className="pt-4">
                <Button click={() => submit()}>Login</Button>
            </div>
        </div>
    );
};

export default Login;
