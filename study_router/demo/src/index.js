import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Router01BasicExample from './Router01BasicExample.js';

ReactDOM.render(
    <div>
        <App />
        <h1>Router Basic Example</h1>
        <Router01BasicExample />
    </div>
    , document.getElementById('root')
);
registerServiceWorker();
