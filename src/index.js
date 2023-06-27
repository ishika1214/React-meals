import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './Context/Store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./index.css"
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
  <Provider store={Store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
</React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
