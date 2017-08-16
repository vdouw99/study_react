/**
 * Created by Administrator on 2017/8/15 0015.
 */

import React from 'react';
import './index.less';

function ItemShowLayer() {
    return (
        <div className="col-md-8 item-show-layer-component">
            <h2>item.title}</h2>
            <div className="item-text">
                div dangerouslySetInnerHTML= __html: content
            </div>
            <div className="control-area">
                <button className="btn btn-primary">编辑</button>
                <button className="btn btn-danger">删除</button>
            </div>
        </div>
    )
}

export default ItemShowLayer;

