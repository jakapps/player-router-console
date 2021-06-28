import { FC, useContext } from "react";
import { Redirect } from "react-router-dom";

import { UserContext } from "../contexts/user";
import { GameServerContext } from "../contexts/game-server";
import { GameServerList } from "../game-server";
import { Button } from "../button";

const Dashboard: FC = () => {

    const { username, setUsername } = useContext(UserContext);
    const { gameServers } = useContext(GameServerContext);

    return (
        <div>
            {username ? <></> : <Redirect to="/login" />}
            <div className="bg-gray-100 flex w-full items-baseline">
                <div>Dashboard</div>
                <div className="flex-grow"></div>
                <div aria-label="username">
                    { username }
                </div>
                <div>
                    <Button click={() => setUsername('')}>
                        Logout
                    </Button>
                </div>
            </div>
            <div className="p-4">
                <GameServerList gameServers={gameServers} />
            </div>
        </div>
    );
};

export default Dashboard;
