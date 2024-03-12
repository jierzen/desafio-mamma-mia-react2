import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import PizzasProvider from './context/PizzasContext.jsx'
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PizzasProvider>
        <App />
      </PizzasProvider>
    </BrowserRouter>
  </React.StrictMode>
,
)
