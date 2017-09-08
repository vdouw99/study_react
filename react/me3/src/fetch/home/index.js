/**
 * Created by Administrator on 2017/9/8 0008.
 */

import {get} from '../get.js';

export function getAdData(){
    const result = get('/api/homead');
    console.log(result);
    return result;
}