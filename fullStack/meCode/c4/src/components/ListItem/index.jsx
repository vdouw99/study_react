/**
 * Created by Administrator on 2017/8/25 0025.
 */

import React from 'react';

function Index({item}) {
    return (
        <a href="javascript:;" className="list-group-item item-component">
            <div>
                <span className="label label-default label-pill pull-xs-right">{new Date(Number(item.time)).toString()}</span>
                <span>{item.title} ||| {item.content}</span>
            </div>
        </a>
    );
}

export default Index;
