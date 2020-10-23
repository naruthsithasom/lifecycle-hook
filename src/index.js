import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

//import App from './App'; //ex.1
//import Footer from './Component/Footer'; //ex.1

// React route DOM
import AppRouteDom from './AppRouteDom'
import { BrowserRouter }  from 'react-router-dom'
ReactDOM.render(
  // Ex.1 React lifecycle 
  
  /* <React.StrictMode> 
    <App />
    <Footer />
  </React.StrictMode>,
  */
 
 // Ex.2 How to use react route DOM
  <BrowserRouter>
      <AppRouteDom />
  </BrowserRouter>,
  
  document.getElementById('rootAmI')

);

serviceWorker.unregister();
