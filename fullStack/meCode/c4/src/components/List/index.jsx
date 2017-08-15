/**
 * Created by Administrator on 2017/8/15 0015.
 */

import React from 'react';
import ListItem from '../ListItem/index.jsx';

function Index({items}) {
    items = items.map(
        item=>(
            <ListItem item={item} key={item.id}/>
        )
    );
    return (
        <div className="list-component col-md-6 list-group">{items}</div>
    )
}

export default Index;


