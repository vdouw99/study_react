/**
 * Created by Administrator on 2017/9/21 0021.
 */

import {get} from '../index.jsx';
import {post} from '../index.jsx';

export function getOrderListData(username) {
    const result = get('/api/orderlist/' + username);
    return result;
}

export function postComment(id, comment, star) {
    const result = post('/api/submitComment', {
        id: id,
        comment: comment,
        star: star
    });
    return result;
}