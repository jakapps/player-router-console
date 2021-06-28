import { UserContext } from "./user";
import { GameServerContext } from "./game-server";

import {
    FC,
    createContext,
    useCallback,
    useRef,
    useContext
} from 'react';

interface WebsocketContextProps {
    attemptConnect: (url: string, username: string, password: string) => void
};

const WebsocketContext = createContext<WebsocketContextProps>({
    attemptConnect: (url: string, username: string, password: string) => {}
});

const WebsocketProvider: FC = ({ children }) => {

    const ws = useRef(null);
    const { setUsername } = useContext(UserContext);
    const { setGameServers } = useContext(GameServerContext);

    const attemptConnect = useCallback((url: string, username: string, password: string) => {
        setUsername(username);

        let gameServers: any = {

            "testSocketId": {
                id: "testServer",
                playerCount: 7,
                playerCapacity: 100,
                labels: {}
            }
        };

        setGameServers(gameServers);

    }, [setUsername, setGameServers]);

    return (
        <WebsocketContext.Provider value={{ attemptConnect }}>
            {children}
        </WebsocketContext.Provider>
    );
};

export {
    WebsocketContext,
    WebsocketProvider
};
