/**
 * Created by Administrator on 2017/8/25 0025.
 */

import React from 'react';

function Index({item}) {
    return (
        <a href="javascript:;" className="list-group-item item-component">
            <div>
                <span className="label label-default label-pill pull-xs-right">{item.title} ||| {item.time}</span>
                <span>{item.content}</span>
            </div>
        </a>
    );
}

export default Index;
