/**
 * Created by Administrator on 2017/9/22 0022.
 */

import * as actionTypes from '../constants/index.jsx';

export function update(data) {
    return {
        type: actionTypes.STORE_UPDATE,
        data: data
    }
}

export function add(item) {
    return {
        type: actionTypes.STORE_ADD,
        data: item
    }
}

export function rm(item) {
    return {
        type: actionTypes.STORE_RM,
        data: item
    }
}