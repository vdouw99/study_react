/**
 * Created by Administrator on 2017/9/12 0012.
 */

import * as actionTypes from '../constants/index.jsx';

export function update(data) {
    return {
        type: actionTypes.USERINFO_UPDATE,
        data: data
    };
}