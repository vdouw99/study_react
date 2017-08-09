/**
 * Created by Administrator on 2017/8/9 0009.
 */

// 加载依赖
import React, {PropTypes} from 'react';
import {render} from 'react-dom';

// 属性验证
const propTypes = {
    item: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
};

// 组件主体
function ListItem({item}) {
    return (
        <a href="#" className="list-group-item item-component">
            <span className="label label-default label-pill pull-xs-right">{item.time}</span>
            <span className="item-title">{item.title}</span>
        </a>
    )
}

// 添加验证
ListItem.propTypes = PropTypes;

// 导出组件
export default ListItem;
