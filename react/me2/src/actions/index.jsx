/**
 * Created by Administrator on 2017/9/4 0004.
 */

import * as actionTypes from '../constants/index.jsx';

export function login(data) {
    return {
        type: actionTypes.USERINFO_LOGIN,
        data: data
    };
}

export function updateCityName(data) {
    return {
        type: actionTypes.UPDATE_CITYNAME,
        data: data
    };
}