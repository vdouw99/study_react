/**
 * Created by Administrator on 2017/8/25 0025.
 */

import React from 'react';

import ListItem from '../ListItem/index.jsx';

function Index({items}) {
    console.log('----List组件------');
    console.log(items);
    const itemsContent = items.map(
        item=>(
            <ListItem item={item} key={item.id}/>
        )
    );
    return (
        <div className="list-component">
            {itemsContent}
        </div>
    )
}

export default Index;
