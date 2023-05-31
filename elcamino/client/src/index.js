import React from 'react';
import ReactDOM from 'react-dom/client';
import { NextUIProvider } from '@nextui-org/react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { theme } from './styles/theme';
import ReactGA from 'react-ga4';

// Google Analytics
ReactGA.initialize("G-N6T9KG86GQ");

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <NextUIProvider theme={theme}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </NextUIProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals           <App />
reportWebVitals();
