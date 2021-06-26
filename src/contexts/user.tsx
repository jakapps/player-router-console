import React, { FC, createContext, useState } from 'react';

type User = {
    username: string,
    setUsername: (username: string) => void
};

const UserContext = createContext<User>({ username: '', setUsername: (u: string) => {}});

interface UserProviderProps {
    children?: any,
    initialUsername?: string
};

const UserProvider: FC<UserProviderProps> = ({ children, initialUsername }) => {

    const [username, setUsername] = useState(initialUsername || '');

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
