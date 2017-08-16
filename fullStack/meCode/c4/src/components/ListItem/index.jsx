/**
 * Created by Administrator on 2017/8/15 0015.
 */

import React, {PropTypes} from 'react';

const propTypes = {
    item: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
};

function ListItem({item}) {
    return (
        <a href="javascript:;" className="list-group-itme item-component">
            <div>
                <span className="label label-default label-pill pull-xs-right">{item.time}</span>
                {item.title}
            </div>
        </a>
    );
}

ListItem.propTypes = propTypes;

export default ListItem;

