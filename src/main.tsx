import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faPlus, faCircleNotch } from '@fortawesome/free-solid-svg-icons';

import App from './App';
import './assets/sass/index.css';

library.add(faTimes, faPlus, faCircleNotch);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // fix useEffect call twice
  // <React.StrictMode>
  <HashRouter>
    <App />
  </HashRouter>
  // </React.StrictMode>
);
