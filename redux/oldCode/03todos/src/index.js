/**
 * Created by sf on 2017/7/19.
 */

import React from 'react';
import {createStore} from 'redux';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import reducer from './reducers/index.js';
import App from './components/App.js';

const store = createStore(reducer);

function renderr() {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    )
}

renderr();
store.subscribe(renderr);