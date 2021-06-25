import React, { FC, createContext, useState } from 'react';

type User = {
    username: string,
    setUsername: (username: string) => void
};

const UserContext = createContext<User>({ username: '', setUsername: (u: string) => {}});

const UserProvider: FC = ({ children }) => {

    const [username, setUsername] = useState('');

    return (
        <UserContext.Provider value={{ username, setUsername }}>
            {children}
        </UserContext.Provider>
    );
};

export {
    UserContext,
    UserProvider
};
