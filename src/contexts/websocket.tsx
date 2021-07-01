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
    attemptConnect: (url: string, username: string, password: string) => Promise<{ [type: string]: string }>,
    disconnect: () => void
};

const WebsocketContext = createContext<WebsocketContextProps>({
    attemptConnect: (url: string, username: string, password: string) => Promise.resolve({}),
    disconnect: () => {}
});

const WebsocketProvider: FC = ({ children }) => {

    const ws: any = useRef(null);
    const connectedPromiseResolve = useRef<any>(null);
    const { setUsername } = useContext(UserContext);
    const { setGameServers } = useContext(GameServerContext);

    const onMessage = useCallback((message: any) => {

        let data = JSON.parse(message.data);
        let errors = {};

        if(data.code === 200) {
            setUsername(data.username);
            setGameServers(data.gameServers || {});
        } else {
            errors = { username: data.errorMessage };
        }

        if(connectedPromiseResolve.current) {
            connectedPromiseResolve.current(errors);
        }

    }, [setUsername, setGameServers]);

    const onError = useCallback((error: any) => {

        if(connectedPromiseResolve.current) {
            connectedPromiseResolve.current({ url: "Failed to connect to server" });
        } else {
            console.error("An error occurred with websocket:");
            console.log(error);
        }
    }, []);

    const attemptConnect = useCallback((url: string, username: string, password: string) => {

        return new Promise<{ [type: string]: string }>((resolve) => {

            connectedPromiseResolve.current = resolve;

            try {
                ws.current = new WebSocket(url);

                ws.current.onopen = () => {
                    ws.current.send(JSON.stringify({ username, password }));
                };

                ws.current.onerror = onError;
                ws.current.onmessage = onMessage;

            } catch (error) {
                resolve({ url: "Invalid URL"})
            }
        });

    }, [onMessage, onError]);

    const disconnect = useCallback(() => {
        ws.current.close();
        setUsername('');
        setGameServers({});
    }, [setUsername, setGameServers]);

    return (
        <WebsocketContext.Provider value={{ attemptConnect, disconnect }}>
            {children}
        </WebsocketContext.Provider>
    );
};

export {
    WebsocketContext,
    WebsocketProvider
};
