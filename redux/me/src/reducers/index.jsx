/**
 * Created by Administrator on 2017/9/1 0001.
 */

import {combineReducers} from 'redux';

import todos from './todos.jsx';
import visibilityFilter from './visibilityFilter.jsx';

const todoApp = combineReducers({
    todos: todos,
    visibilityFilter: visibilityFilter
});

export default todoApp;