import { FC } from "react";
import { Box } from "../box";

interface GameServerProps {
    playerCount: number
};

const GameServer:FC<GameServerProps> = ({ playerCount }) => {

    return (
        <Box collapsed={false}>
            {playerCount}
        </Box>
    );
};

export { GameServer };
