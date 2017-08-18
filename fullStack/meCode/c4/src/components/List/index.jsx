/**
 * Created by Administrator on 2017/8/15 0015.
 */

import React from 'react';
import ListItem from '../ListItem/index.jsx';

function List({items,onSelect}) {
    items = items.map(
        item=>(
            <ListItem item={item} key={item.id} onClick={()=>onSelect(item.id)}/>
        )
    );
    console.log(items);
    return (
        <div className="list-component">{items}</div>
    )
}

export default List;


