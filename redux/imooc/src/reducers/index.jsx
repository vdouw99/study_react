/**
 * Created by Administrator on 2017/8/30 0030.
 */

import todos from './todos.jsx';
import visibilityFilter from './visibilityFilter.jsx';
import {combineReducers} from 'redux';

const todoApp = combineReducers({
    todos: todos,
    visibilityFilter: visibilityFilter
});

export default todoApp;