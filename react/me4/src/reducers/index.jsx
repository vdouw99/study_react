/**
 * Created by Administrator on 2017/9/12 0012.
 */

import {combineReducers} from 'redux';

import userinfo from './userinfo.jsx';

const rootReducer = combineReducers({
    userinfo: userinfo
});

export default rootReducer;