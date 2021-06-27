
interface ILoginSubmitData {
    url: string,
    username?: string,
    password?: string
};

interface IInputFieldProps {
    name: string,
    title: string,
    error?: string,
    placeholder?: string
    onChange: (value: string) => void
};

interface ILoginProps {
    loading: boolean,
    errorUrl?: string,
    errorUsername?: string,
    errorPassword?: string,
    onSubmit: (args: ILoginSubmitData) => void
};

export type {
    ILoginSubmitData,
    IInputFieldProps,
    ILoginProps
};
