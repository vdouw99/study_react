/**
 * Created by Administrator on 2017/8/15 0015.
 */

import React, {PropTypes} from 'react';

const propTypes = {
    item: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
};

function ListItem({item, onSelect}) {
    var formatTime = '未知时间';
    if (item.time) {
        formatTime = new Date(item.time).toString();
    }
    return (
        <a href="javascript:;" className="list-group-itme item-component" onClick={onSelect}>
            <div>
                <span className="label label-default label-pill pull-xs-right">{formatTime}</span>
                {item.title}
            </div>
        </a>
    );
}

ListItem.propTypes = propTypes;

export default ListItem;

