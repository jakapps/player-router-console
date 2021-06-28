import { FC } from "react";

import { IGameServers } from "../interfaces";
import { GameServer } from "./game-server";

interface GameServerListProps {
    gameServers: IGameServers
}

const GameServerList: FC<GameServerListProps> = ({ gameServers }) => {

    const displayGameServers = Object.entries(gameServers)
    .map(([key, value]) => <GameServer key={key} {...value} />);

    return (
        <>
            {displayGameServers}
        </>
    );
};

export { GameServerList };
