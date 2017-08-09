/**
 * Created by Administrator on 2017/8/9 0009.
 */

import React, {PropTypes} from 'react';
import {render} from 'react-dom';
import ListItem from '../ListItem/index.jsx';

function List({items}) {
    items = items.map(
        item=>(
            <ListItem item={item} key={item.id}/>
        )
    );
    return (
        <div className="list-component col-md-4 list-group">{items}</div>
    );
}

export default List;
