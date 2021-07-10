import { FC, useContext } from "react";
import { Redirect } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import { UserContext } from "../contexts/user";
import { GameServerContext } from "../contexts/game-server";
import { WebsocketContext } from "../contexts/websocket";
import { GameServerList } from "../game-server";

const Dashboard: FC = () => {

    const { username } = useContext(UserContext);
    const { gameServers } = useContext(GameServerContext);
    const { disconnect } = useContext(WebsocketContext);

    return (
        <div>
            {username ? <></> : <Redirect to="/login" />}
            <div className="bg-gray-100 flex w-full items-baseline text-gray-500">
                <div className="px-2">Player Router Console</div>
                <div className="flex-grow"></div>
                <div>
                    <FontAwesomeIcon icon={faUser} />
                </div>
                <div className="px-2" aria-label="username">
                    { username }
                </div>
                <div className="p-2 flex border-gray-500 border-l cursor-pointer hover:bg-gray-200"
                    onClick={() => disconnect()}>
                    <div className="pr-2">
                        <FontAwesomeIcon icon={faSignOutAlt} />
                    </div>
                    Logout
                </div>
            </div>
            <div className="p-2">
                <GameServerList gameServers={gameServers} />
            </div>
        </div>
    );
};

export default Dashboard;
