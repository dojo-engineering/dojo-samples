import React, { Component } from 'react';
import { Route, Routes } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { OrderResult } from './components/OrderResult';

import './App.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/order-result' element={<OrderResult/>}  />
        </Routes>
      </Layout>
    );
  }
}
