/**
 * Created by Administrator on 2017/8/30 0030.
 */

import {combineReducers} from 'redux';

import todos from './todos.jsx';
import visibilityFilter from './visibilityfilter.jsx';

const todoApp = combineReducers({
    todos: todos,
    visibilityFilter: visibilityFilter
});

export default todoApp;