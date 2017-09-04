/**
 * Created by sf on 2017/6/29.
 */

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import configureStore from './store/index.jsx';
import Hello from './containers/Hello.jsx';

const store = configureStore();

render(
    <Provider store={store}>
        <div>
            <Hello/>
        </div>
    </Provider>,
    document.getElementById('root')
);
