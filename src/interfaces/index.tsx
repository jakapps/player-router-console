
interface ILoginSubmitData {
    url: string,
    username: string,
    password: string
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
    urlError: string,
    usernameError: string,
    passwordError: string,
    onSubmit: (args: ILoginSubmitData) => void
};

interface IGameServerProps {
    id: string,
    playerCount: number,
    playerCapacity: number,
    labels: { [label: string]: string },
    gameServerURL: string
};

interface IGameServers {
    [serverId: string]: IGameServerProps
};

export type {
    ILoginSubmitData,
    IInputFieldProps,
    ILoginProps,
    IGameServerProps,
    IGameServers
};
