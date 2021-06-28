import { IGameServers } from "../interfaces";

import {
    FC,
    createContext,
    useState
} from 'react';

interface GameServerContextProps {
    gameServers: IGameServers,
    setGameServers: (gameServers: IGameServers) => void
};

const GameServerContext = createContext<GameServerContextProps>({ gameServers: {}, setGameServers: (gameServers: IGameServers) => {}});

interface GameServerProviderProps {
    children?: any,
    initialGameServers?: IGameServers
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
