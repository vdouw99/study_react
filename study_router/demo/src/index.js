import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Router01BasicExample from './Router01BasicExample.js';
import Router02Params from './Router02Params.js';
import Router03Auth from './Router03Auth.js';
import Router04CustomLink from './Router04CustomLink.js';

ReactDOM.render(
    <div>
        <App />
        <hr />
        <h1>Router Basic Example</h1>
        <Router01BasicExample />
        <hr />
        <h1>url Params</h1>
        <Router02Params />
        <hr />
        <h1>auth-workflow</h1>
        <Router03Auth />
        <hr />
        <h1>custom-link</h1>
        <Router04CustomLink />
    </div>
    , document.getElementById('root')
);
registerServiceWorker();
