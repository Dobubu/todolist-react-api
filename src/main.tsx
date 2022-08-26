import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons'

import App from './App'
import './assets/sass/index.css'

library.add(faTimes, faPlus)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
)
