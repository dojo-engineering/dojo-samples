import React from 'react';
import { Route, Routes } from 'react-router';
import { Home } from './components/Home';
import { OrderResult } from './components/OrderResult';
import { Checkout } from './components/Checkout';
import { PageNotFound } from './components/PageNotFound';

import './App.css'

const App = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route path='/order-result' element={<OrderResult/>} />
            <Route path='/checkout' element={<Checkout/>} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
};

export default App;