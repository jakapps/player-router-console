import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';

import { SplashScreen } from "./splash-screen";
import { Dashboard } from "./dashboard";

import { UserProvider } from "./contexts/user";
import { GameServerProvider } from "./contexts/game-server";
import { WebsocketProvider } from "./contexts/websocket";

const App: FC = () => {

    return (
        <BrowserRouter>
            <div className="app h-full">
                <UserProvider>
                    <GameServerProvider>
                        <WebsocketProvider>
                            <Switch>
                                <Route path="/login">
                                    <SplashScreen />
                                </Route>
                                <Route path="/">
                                    <Dashboard />
                                </Route>
                            </Switch>
                        </WebsocketProvider>
                    </GameServerProvider>
                </UserProvider>
            </div>
        </BrowserRouter>
    );
};

export default App;
