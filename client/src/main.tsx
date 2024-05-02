import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'jotai'
import Router from './routes/Routes.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
