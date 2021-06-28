import { FC } from "react";
import { Box, InfoBox } from "../box";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

import { IGameServerProps } from "../interfaces";

const GameServer:FC<IGameServerProps> = ({ id, playerCount, playerCapacity, labels }) => {

    let displayLabels;

    if(labels) {

        displayLabels = Object.entries(labels)
        .map(([label, value]) => {

            return (
                <div key={label} className="inline-block pl-4">
                    <InfoBox label={label}>{value}</InfoBox>
                </div>
            );
        });
    }

    return (
        <Box collapsed={false} title={id}>
            <div className="flex no-wrap">
                <div className="inline-block">
                    <InfoBox label={<FontAwesomeIcon icon={faUsers} />}>
                        <div className="flex">
                            <div>{playerCount}</div> /
                            <div>{playerCapacity}</div>
                        </div>
                    </InfoBox>
                </div>
                {displayLabels}
            </div>
        </Box>
    );
};

export { GameServer };
