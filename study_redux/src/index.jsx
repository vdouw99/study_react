/**
 * Created by sf on 2017/7/14.
 */

import React from 'react';
import {render} from 'react-dom';
import App from './app.js';

import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import Redux02 from './Redux02.jsx';


render(
    <div>
        <App />
        <Provider>
            <Redux02 />
        </Provider>
    </div>,
    document.getElementById('root')
);
