/**
 * Created by Administrator on 2017/8/15 0015.
 */

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import todoApp from './reducers/index.jsx';
import App from './components/App.jsx';

const store = createStore(todoApp);

console.log(store.getState());

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);