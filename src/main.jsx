import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import productStore from './redux/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={productStore}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
