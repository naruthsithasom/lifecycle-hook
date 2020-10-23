import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Footer from './Component/Footer';

ReactDOM.render(

   <React.StrictMode> 
    <App />
    <Footer />
  </React.StrictMode>,

  document.getElementById('rootAmI')

);

serviceWorker.unregister();
