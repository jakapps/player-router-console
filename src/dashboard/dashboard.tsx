import { FC, useContext } from "react";
import { Redirect } from "react-router-dom";

import { UserContext } from "../contexts/user";

const Dashboard: FC = () => {

    const { username } = useContext(UserContext);

    return (
        <>
            {username ? <></> : <Redirect to="/login" />}
        </>
    );
};

export default Dashboard;
