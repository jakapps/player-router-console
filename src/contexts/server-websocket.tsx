import { UserContext } from "./user";

import {
    FC,
    createContext,
    useState,
    useCallback,
    useRef,
    useContext
} from 'react';

interface ServerWebsocketContextProps {
    attemptConnect: (url: string, username: string, password: string) => void,
    gameServers: { [serverId: string]: any}
};

const ServerWebsocketContext = createContext<ServerWebsocketContextProps>({
    attemptConnect: (url: string, username: string, password: string) => {},
    gameServers: {}
});

const ServerWebsocketProvider: FC = ({ children }) => {

    const ws = useRef(null);
    const [gameServers, setGameServers] = useState({});
    const {setUsername} = useContext(UserContext);

    const attemptConnect = useCallback((url: string, username: string, password: string) => {
        setUsername(username);
    }, [setUsername]);

    return (
        <ServerWebsocketContext.Provider value={{ gameServers, attemptConnect }}>
            {children}
        </ServerWebsocketContext.Provider>
    );
};

export {
    ServerWebsocketContext,
    ServerWebsocketProvider
};
