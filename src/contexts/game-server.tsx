import { IGameServerProps } from "../interfaces";

import {
    FC,
    createContext,
    useState
} from 'react';

type GameServers = {
    [serverId: string]: IGameServerProps
};

interface GameServerContextProps {
    gameServers: GameServers,
    setGameServers: (gameServers: GameServers) => void
};

const GameServerContext = createContext<GameServerContextProps>({ gameServers: {}, setGameServers: (gameServers: GameServers) => {}});

interface GameServerProviderProps {
    children?: any,
    initialGameServers?: GameServers
}

const GameServerProvider: FC<GameServerProviderProps> = ({ children, initialGameServers }) => {

    const [gameServers, setGameServers] = useState(initialGameServers || {});

    return (
        <GameServerContext.Provider value={{ gameServers, setGameServers }}>
            {children}
        </GameServerContext.Provider>
    );
};

export {
    GameServerContext,
    GameServerProvider
};
