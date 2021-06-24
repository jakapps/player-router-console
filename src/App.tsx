import React, { FC, useState } from 'react';
import './App.css';

import { Login } from "./login";

const App: FC = () => {

    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 3000);

    return (
        <div className="app h-full">
            <div className="flex flex-col h-full">

                <div className="flex-grow"></div>

                <div className="flex">
                    <div className="flex-grow"></div>
                    <Login
                        loading={loading}
                        onSubmit={() => console.log('submit')}
                    />
                    <div className="flex-grow"></div>
                </div>

                <div className="flex-grow"></div>

            </div>
        </div>
    );
};

export default App;
