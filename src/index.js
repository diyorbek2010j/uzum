import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "number-brm"
import { BrowserRouter } from 'react-router-dom';
// redux
import { Provider } from 'react-redux';
import { store } from './context/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


