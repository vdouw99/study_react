/**
 * Created by Administrator on 2017/9/18 0018.
 */

import {get} from '../index.jsx';

export function getAdData() {
    const result = get('/api/homead');
    // console.log('-------fetch/home/index.js {getAdData}--------');
    // console.log(result);
    return result;
}