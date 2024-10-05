import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GlobalStyle from './GlobalStyle';
import { GlobalContextProvider } from './context/global';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    {/* <App /> */}
    <GlobalContextProvider>

      <App />

    </GlobalContextProvider>
    
  </React.StrictMode>

);