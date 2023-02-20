import React from 'react';
import ReactDOM from 'react-dom/client';
import { NextUIProvider, createTheme } from '@nextui-org/react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"

const darkTheme = createTheme({
  type: "dark"
})
const lightTheme = createTheme({type: "light"})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NextUIProvider theme={darkTheme}>
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
