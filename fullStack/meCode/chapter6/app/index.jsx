/**
 * Created by Administrator on 2017/8/15 0015.
 */

import React from 'react';
import {render} from 'react-dom';
import {bindActionCreators, createStore, applyMiddleware} from 'redux';
import {connect, Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import Deskmark from './components/Deskmark/index.jsx';
import rootReducer from './reducers/index.jsx';
import * as actionCreators from './actions/index.jsx';

render(
    <div>
        <Deskmark />
    </div>,
    document.getElementById('root')
);