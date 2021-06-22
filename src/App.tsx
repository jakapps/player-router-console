import React, { FC } from 'react';
import './App.css';

import { EnterServerURL } from "./enter-server-url";

const App: FC = () => {
    return (
        <div className="App">
            <EnterServerURL />
        </div>
    );
};

export default App;
