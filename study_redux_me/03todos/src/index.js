/**
 * Created by sf on 2017/7/19.
 */

import React from 'react';
import {createStore} from 'redux';
import ReactDOM from 'react-dom';

import App from './components/App.js';

// const store = createStore();

function renderr() {
    ReactDOM.render(
        <div>
            <p>Todos</p>
            <App />
        </div>,
        document.getElementById('root')
    )
}

renderr();