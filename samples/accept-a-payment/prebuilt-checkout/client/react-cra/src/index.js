import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { createRoot } from 'react-dom/client';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');


const root = createRoot(rootElement); // createRoot(container!) if you use TypeScript
root.render(
  <BrowserRouter basename={baseUrl}>
    <App />
  </BrowserRouter>);