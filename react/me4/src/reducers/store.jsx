/**
 * Created by Administrator on 2017/9/21 0021.
 */

import * as actionTypes from '../constants/index.jsx';

const initialState = [];

// 定义Redux规则
export default function userinfo (state = initialState, action) {
    switch (action.type) {
        case actionTypes.STORE_UPDATE:
            return action.data;
        case actionTypes.STORE_ADD:
            state.unshift(action.data);
            return state;
        case actionTypes.STORE_RM:
            return state.filter(item => {
                if (item.id !== action.data.id) {
                    return item;
                }
            });
        default:
            return state;
    }
}
