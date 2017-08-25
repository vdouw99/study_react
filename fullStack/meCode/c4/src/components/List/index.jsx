/**
 * Created by Administrator on 2017/8/25 0025.
 */

import React from 'react';

import ListItem from '../ListItem/index.jsx';

function Index({items}) {
    console.log('----List组件------');
    console.log(items);
    return (
        <div className="list-component">
            <ListItem />
        </div>
    )
}

export default Index;
