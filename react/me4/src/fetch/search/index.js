/**
 * Created by Administrator on 2017/9/19 0019.
 */

import {get} from '../index.jsx';

export function getSearchData(page, cityName, category, keyword) {
    const keywordStr = keyword ? '/' + keyword : '';
    const result = get('/api/search/' + page + '/' + cityName + '/' + category + keywordStr);
    return result;
}