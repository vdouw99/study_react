/**
 * Created by Administrator on 2017/9/12 0012.
 */

import * as actionTypes from '../constants/index.jsx';

export function userinfoUpdate(data) {
    return {
        type: actionTypes.USERINFO_UPDATE,
        data: data
    };
}

export function storeUpdate(data) {
    return {
        type: actionTypes.STORE_UPDATE,
        data: data
    };
}

export function storeAdd(item) {
    return {
        type: actionTypes.STORE_ADD,
        data: item
    };
}

export function storeRm(item) {
    return {
        type: actionTypes.STORE_RM,
        data: item
    };
}