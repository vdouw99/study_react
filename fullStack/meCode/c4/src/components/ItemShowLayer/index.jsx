/**
 * Created by Administrator on 2017/8/25 0025.
 */

import React from 'react';
import './index.less';

function Index({item}) {
    if (!item) {
        return (
            <div className="col-md-6 item-show-layer-component">
                <div className="no-select">请选择左侧列表里面的文章</div>
            </div>
        );
    } else {
        return (
            <div className="col-md-8 item-show-layer-component">
                <h2>{item.title}</h2>
                <div className="item-text">
                    <div>{item.content}</div>
                </div>
                <div className="control-area">
                    <button className="btn btn-primary">编辑</button>
                    <button className="btn btn-danger">删除</button>
                </div>
            </div>
        );
    }
}

export default Index;
