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
    attemptConnect: (url: string, username: string, password: string) => boolean
};

const WebsocketContext = createContext<WebsocketContextProps>({
    attemptConnect: (url: string, username: string, password: string) => false
});

const WebsocketProvider: FC = ({ children }) => {

    const ws: any = useRef(null);
    const { setUsername } = useContext(UserContext);
    const { setGameServers } = useContext(GameServerContext);

    const attemptConnect = useCallback((url: string, username: string, password: string) => {

        try {
            ws.current = new WebSocket(url);
            ws.current.onerror('error', (error: any) => {
                console.log(error);
            });

        } catch (error) {
            return false;
        }




        let gameServers: any = {

            "testSocketId": {
                id: "testServer",
                playerCount: 7,
                playerCapacity: 100,
                labels: {}
            }
        };

        setUsername(username);
        setGameServers(gameServers);

        return true;

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
