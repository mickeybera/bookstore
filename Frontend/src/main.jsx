import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './context/AuthProvider.jsx'
// import AuthProvider from './context/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <AuthProvider>

            <div className="">
                <App />
            </div>

        </AuthProvider>
    </BrowserRouter>


)
