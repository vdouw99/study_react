/**
 * Created by Administrator on 2017/8/9 0009.
 */

import React, {PropTypes} from 'react';
import {render} from 'react-dom';
import ListItem from '../ListItem/index.jsx';

function List({items, onSelect}) {
    const itemsContent = items.map(
        item=>(
            <ListItem item={item} key={item.id} onClick={()=>onSelect(item.id)}/>
        )
    );
    return (
        <div className="list-component">{itemsContent}</div>
    );
}

export default List;
