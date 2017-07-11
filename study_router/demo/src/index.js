import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Router01BasicExample from './Router01BasicExample.js';
import Router02Params from './Router02Params.js';

ReactDOM.render(
    <div>
        <App />
        <hr />
        <h1>Router Basic Example</h1>
        <Router01BasicExample />
        <hr />
        <h1>url Params</h1>
        <Router02Params />
    </div>
    , document.getElementById('root')
);
registerServiceWorker();
