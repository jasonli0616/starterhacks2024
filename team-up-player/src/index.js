import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Auth0Provider} from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-qv7mktrv8sxp1y8g.us.auth0.com"
    clientId="T1vLMr7G88OANd40f80XsjVXmJ9LChI7"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <BrowserRouter>
    <App />
  </BrowserRouter>

  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
