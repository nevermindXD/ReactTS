import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/home";
import Settings from "./components/settings";
import Topics from "./components/topics";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/settings" element={<Settings/>}/>
                <Route path="/topics" element={<Topics/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
);