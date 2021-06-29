import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';

import { SplashScreen } from "./splash-screen";
import { Dashboard } from "./dashboard";


const App: FC = () => {

    return (
        <BrowserRouter>
            <div className="app h-full">
                <Switch>
                    <Route path="/login">
                        <SplashScreen />
                    </Route>
                    <Route path="/">
                        <Dashboard />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
