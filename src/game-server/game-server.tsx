import { FC } from "react";
import { Box } from "../box";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

interface GameServerProps {
    id: string,
    playerCount: number
};

const GameServer:FC<GameServerProps> = ({ id, playerCount }) => {

    return (
        <Box collapsed={false} title={id}>
            <div className="p-2 bg-white border-2 border-blue-500 rounded">
                <FontAwesomeIcon icon={faUsers} />
                {playerCount}
            </div>
        </Box>
    );
};

export { GameServer };
