/**
 * Created by Administrator on 2017/9/20 0020.
 */

import {get} from '../index.jsx';

export function getInfoData(id) {
    const result = get('/api/detail/info/' + id);
    return result;
}

export function getCommentData(page, id) {
    const result = get('/api/detail/comment/' + page + '/' + id);
    return result;
}