/**
 * Created by Administrator on 2017/8/15 0015.
 */

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import Test from './components/test.jsx';
import todoReducer from './reducers/index.jsx';

import AddTodo from './containers/AddTodo.jsx';

const store = createStore(todoReducer);
console.log('------初始store start------');
console.log(store.getState());
console.log('------初始store end------');

render(
    <Provider store={store}>
        <div>
            <AddTodo />
            <Test testProp="testProp"/>
        </div>
    </Provider>,
    document.getElementById('root')
);