import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import StatsPage from './Pages/StatsPage/StatsPage';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import Header from './Components/Header/Header';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route element={<HomePage/>} path='/' exact />
                <Route element={<StatsPage/>} path='/stats' />
                <Route element={<NotFoundPage/>} path='*' />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;