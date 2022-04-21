import React from 'react';
import ReactDOM from 'react-dom';
import GlobalCSS from './global.css'
import App from './App';

// import * as serviceWorker from './serviceWorker';
// import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <GlobalCSS />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// serviceWorker.unregister();