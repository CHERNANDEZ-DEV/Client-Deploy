import React from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { UserProvider } from './utils/UserContext';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';



ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='655681073497-3mvehg16qtcm65061cioohc45h9dsbeu.apps.googleusercontent.com'>
    <UserProvider>
      <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
      </React.StrictMode>
    </UserProvider>
  </GoogleOAuthProvider>
)

