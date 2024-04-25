import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './components/intro/intro.js';
import './components/intro/intro.css';
import './components/about/about.js';
import './components/about/about.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  <React.StrictMode>

     
<App/>

    </React.StrictMode>)
        
        reportWebVitals();