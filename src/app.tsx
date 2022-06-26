import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './styles.scss';

import NotFound from "./components/404";
import Navbar from './components/Navbar';
import AddBook from './components/AddBook';
import BookList from './components/BookList';


const App: React.FC = () => (
    <Router>
        <Navbar/>
        <Routes>
            <Route path='*' element={<NotFound/>} />
            <Route path='/' element={<BookList/>}/>
            <Route path='/add-new-book' element={<AddBook/>}/>
            <Route path='/update-book/:id' element={<AddBook/>}/>
        </Routes>
    </Router>
);

export default App;