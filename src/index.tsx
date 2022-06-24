// import React,{ Suspense } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './app';

import Home from "./components/home";
import Settings from "./components/settings";
import Topics from "./components/topics";
import NotFound from "./components/404";

// const NotFound = React.lazy(() => import('./components/404'));
// const Home = React.lazy(() => import('./components/home'));
// const Settings = React.lazy(() => import('./components/settings'));
// const Topics = React.lazy(() => import('./components/topics'));


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            {/* <Suspense fallback={<div>Loading...</div>}> */}
            <Routes>
                <Route path='*' element={<NotFound/>} />
                <Route path="/" element={<App/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/settings" element={<Settings/>}/>
                <Route path="/topics" element={<Topics/>}/>
            </Routes>
            {/* </Suspense> */}
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
);

