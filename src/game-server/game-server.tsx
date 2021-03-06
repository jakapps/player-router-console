import { FC } from "react";
import { Box, InfoBox } from "../box";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faLink } from "@fortawesome/free-solid-svg-icons";

import { IGameServerProps } from "../interfaces";

const GameServer:FC<IGameServerProps> = ({
    id,
    playerCount,
    playerCapacity,
    labels,
    gameServerURL }) => {

    let displayLabels;

    if(labels) {

        displayLabels = Object.entries(labels)
        .map(([label, value]) => {

            return (
                <div key={label} className="p-2">
                    <InfoBox label={label}>{value}</InfoBox>
                </div>
            );
        });
    }

    return (
        <Box collapsed={false} title={id}>
            <div className="flex flex-wrap w-full p-2">
                <div className="p-2">
                    <InfoBox label={<FontAwesomeIcon icon={faUsers} />}>
                        <div className="flex">
                            <div>{playerCount}</div> /
                            <div>{playerCapacity}</div>
                        </div>
                    </InfoBox>
                </div>
                <div className="p-2">
                    <InfoBox label={<FontAwesomeIcon icon={faLink} />}>
                        {gameServerURL}
                    </InfoBox>
                </div>
                {displayLabels}
            </div>
        </Box>
    );
};

export { GameServer };
