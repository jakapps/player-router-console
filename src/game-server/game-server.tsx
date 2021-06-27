import { FC } from "react";
import { Box, InfoBox } from "../box";

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
                <InfoBox label={<FontAwesomeIcon icon={faUsers} />}>
                    <div className="flex">
                        <div>{playerCount}</div> /
                        <div>{playerCapacity}</div>
                    </div>
                </InfoBox>
            </div>
        </Box>
    );
};

export { GameServer };
