import { FC } from "react";
import { Box } from "../box";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

interface GameServerProps {
    id: string,
    playerCount: number,
    playerCapacity: number
};

const GameServer:FC<GameServerProps> = ({ id, playerCount, playerCapacity }) => {

    return (
        <Box collapsed={false} title={id}>
            <div className="inline-block">
                <div className="bg-white border-2 border-blue-500 rounded flex">
                    <div className="bg-blue-500 p-2 text-gray-100">
                        <FontAwesomeIcon icon={faUsers} />
                    </div>
                    <div className="p-2 flex">
                        <div>{playerCount}</div> /
                        <div>{playerCapacity}</div>
                    </div>
                </div>
            </div>
        </Box>
    );
};

export { GameServer };
