import { FC, useContext } from "react";
import { Redirect } from "react-router-dom";

import { UserContext } from "../contexts/user";
import { GameServerContext } from "../contexts/game-server";
import { GameServer } from "../game-server";
import { Button } from "../button";

const Dashboard: FC = () => {

    const { username, setUsername } = useContext(UserContext);
    const { gameServers } = useContext(GameServerContext);

    const displayGameServers = Object.entries(gameServers)
    .map(([key, value]) => <GameServer key={key} {...value} />);

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
                {displayGameServers}
            </div>
        </div>
    );
};

export default Dashboard;
