import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Scroll reveals only hide content once we know JS runs and motion is welcome
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.classList.add('js-motion')
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
