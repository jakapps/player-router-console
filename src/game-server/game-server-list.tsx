import { FC } from "react";

import { IGameServers } from "../interfaces";
import { GameServer } from "./game-server";

interface GameServerListProps {
    gameServers: IGameServers
}

const GameServerList: FC<GameServerListProps> = ({ gameServers }) => {

    const displayGameServers = Object.entries(gameServers)
    .map(([key, value]) => {

        return (
            <div key={key} className="w-full p-2 md:w-1/2 lg:w-1/3 xl:w-auto">
                <GameServer key={key} {...value} />
            </div>
        );
    });

    return (
        <div className="flex w-full flex-wrap">
            {displayGameServers}
        </div>
    );
};

export { GameServerList };
