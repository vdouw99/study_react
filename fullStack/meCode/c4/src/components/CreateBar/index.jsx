/**
 * Created by Administrator on 2017/8/25 0025.
 */

import React from 'react';

function Index({onClickFromCreatebar}) {
    return (
        <a href="javascript:;" onClick={onClickFromCreatebar} className="list-group-item create-bar-component">
            + 创建新文章
        </a>
    )
}

export default Index;
