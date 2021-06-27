import { FC } from "react";
import { Box } from "../box";

interface GameServerProps {
    id: string,
    playerCount: number
};

const GameServer:FC<GameServerProps> = ({ id, playerCount }) => {

    return (
        <Box collapsed={false} title={id}>
            <div>{playerCount}</div>
        </Box>
    );
};

export { GameServer };
