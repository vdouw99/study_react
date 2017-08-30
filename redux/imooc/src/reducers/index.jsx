/**
 * Created by Administrator on 2017/8/30 0030.
 */

import todos from './todos';
import visibilityFilter from './visibilityFilter';
import {combineReducers} from 'redux';

const todoApp = combineReducers({
    todos,
    visibilityFilter
});

export default todoApp;