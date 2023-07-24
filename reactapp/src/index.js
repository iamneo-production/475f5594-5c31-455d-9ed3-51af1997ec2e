import React from 'react';

import './index.css';
import App from './App';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

  ReactDOM.render(
    <Provider store={store}>
  <BrowserRouter>
    <App />
        </BrowserRouter>
  </Provider>,
  document.getElementById('root'));


reportWebVitals();
