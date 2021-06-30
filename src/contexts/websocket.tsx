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
    attemptConnect: (url: string, username: string, password: string) => Promise<{ [type: string]: string }>
};

const WebsocketContext = createContext<WebsocketContextProps>({
    attemptConnect: (url: string, username: string, password: string) => Promise.resolve({})
});

const WebsocketProvider: FC = ({ children }) => {

    const ws: any = useRef(null);
    const { setUsername } = useContext(UserContext);
    const { setGameServers } = useContext(GameServerContext);

    const attemptConnect = useCallback((url: string, username: string, password: string) => {

        return new Promise<{ [type: string]: string}>((resolve) => {

            try {
                ws.current = new WebSocket(url);

                ws.current.onerror = (error: any) => {
                    resolve({ url: "Failed to connect to server"})
                };

                ws.current.onopen = () => {

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

                    resolve({});
                };

            } catch (error) {
                resolve({ url: "Invalid URL"})
            }
        });
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
