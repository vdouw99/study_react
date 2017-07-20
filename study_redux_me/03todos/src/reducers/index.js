/**
 * Created by sf on 2017/7/20.
 */

import {combineReducers} from 'redux';
import todos from './todos.js';
import visibilityFilter from './visibiletyFilter.js';

const todoApp = combineReducers({
    todos: todos,
    visibilityFilter: visibilityFilter
});

export default todoApp;
