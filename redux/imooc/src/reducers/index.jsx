/**
 * Created by Administrator on 2017/8/30 0030.
 */

import todos from './todos.jsx';
import visibilityFilter from './visibilityFilter.jsx';
import {combineReducers} from 'redux';

// 将写在各处的reducer进行合并
const todoApp = combineReducers({
    todos: todos,
    visibilityFilter: visibilityFilter
});

export default todoApp;