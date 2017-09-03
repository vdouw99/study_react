/**
 * Created by Administrator on 2017/8/9 0009.
 */

// 加载依赖
import React, {PropTypes} from 'react';

// 属性验证
const propTypes = {
    item: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
};

// 组件主体
function ListItem({item, onClick}) {
    let formatTime = '未知时间';
    if (item.time) {
        // formatTime = new Date(item.time).toISOString().match(/(\d{4}-\d{2}-\d{2})/)[1];
        formatTime = new Date(item.time).toString();
    }
    return (
        <a href="#" onClick={onClick} className="list-group-item item-component">
            <span className="label label-default label-pill pull-xs-right">{formatTime} - formatTime</span>
            <span className="item-title">{item.title} - item.title</span>
        </a>
    )
}

// 添加验证
ListItem.propTypes = propTypes;

// 导出组件
export default ListItem;
