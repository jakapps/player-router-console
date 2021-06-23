import React, { FC } from 'react';
import './App.css';

import { Login } from "./login";

const App: FC = () => {
    return (
        <div className="app h-full">
            <div className="flex flex-col h-full">

                <div className="flex-grow"></div>

                <div className="flex">
                    <div className="flex-grow"></div>
                    <Login onSubmit={() => console.log('submit')} />
                    <div className="flex-grow"></div>
                </div>

                <div className="flex-grow"></div>

            </div>
        </div>
    );
};

export default App;
