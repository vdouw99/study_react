/**
 * Created by Administrator on 2017/9/12 0012.
 */

import {combineReducers} from 'redux';

import userinfo from './userinfo.jsx';
import store from './store.jsx';

const rootReducer = combineReducers({
    userinfo: userinfo,
    store: store
});

export default rootReducer;