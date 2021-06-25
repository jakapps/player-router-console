import { FC, useContext } from "react";
import { Redirect } from "react-router-dom";

import { UserContext } from "../contexts/user";

const Dashboard: FC = () => {

    const { username } = useContext(UserContext);

    return (
        <div>
            {username ? <></> : <Redirect to="/login" />}
            <div>Dashboard</div>
        </div>
    );
};

export default Dashboard;
