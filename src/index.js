import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {  BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import './index.css';
// import reportWebVitals from './reportWebVitals';


import store from './store/configureStore';
import theme from './theme/configureTheme';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
