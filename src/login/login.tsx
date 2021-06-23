import { FC } from "react";

interface InputFieldProps {
    name: string,
    title: string,
    placeholder?: string
};

const InputField: FC<InputFieldProps> = ({ name, title, placeholder }) => {

    return (
        <>
            <div className="pb-1">{title}</div>
            <input
                placeholder={placeholder}
                className="w-full p-2 rounded outline-none border-2 border-blue-500"
                aria-label={`${name}-input`}
            />
        </>
    )
};

const Login: FC = () => {

    return (
        <div className="bg-gray-100 p-4 border-2 border-blue-500 rounded">
            <div className="pb-4">
                <InputField
                    name="url"
                    title="Player Router Server"
                    placeholder="Eg wss://server.playerrouter.com"
                />
            </div>
            <div className="flex w-full">
                <div className="w-1/2 pr-2">
                    <InputField
                        name="username"
                        title="Username"
                        placeholder="Eg admin"
                    />
                </div>
                <div className="w-1/2 pl-2">
                    <InputField
                        name="password"
                        title="Password"
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;
