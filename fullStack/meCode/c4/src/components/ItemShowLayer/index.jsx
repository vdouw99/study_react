/**
 * Created by Administrator on 2017/8/15 0015.
 */

import React from 'react';
import marked from 'marked';
import './index.less';

function ItemShowLayer({item, onEdit}) {
    if (!item || !item.id) {
        return (
            <div className="col-md-8 item-show-layer-component">
                <div className="no-select">请选择左侧列表里面的文章</div>
            </div>
        );
    }

    const content = marked(item.content);
    return (
        <div className="col-md-8 item-show-layer-component">
            <h2>{item.title}</h2>
            <div className="item-text">
                <div dangerouslySetInnerHTML={{ __html: content }}/>
                {/*
                <div>这是marked的用处：{content}</div>
                 */}
            </div>
            <div className="control-area">
                <button onClick={()=>onEdit(item.id)} className="btn btn-primary">编辑</button>
                <button className="btn btn-danger">删除</button>
            </div>
        </div>
    )
}

export default ItemShowLayer;

