import { FC } from "react";

interface GameServerProps {
    playerCount: number
};

const GameServer:FC<GameServerProps> = ({ playerCount }) => {

    return (
        <div className="bg-gray-200">
            {playerCount}
        </div>
    );
};

export { GameServer };
