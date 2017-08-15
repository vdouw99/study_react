/**
 * Created by Administrator on 2017/8/15 0015.
 */

import React, {PropTypes} from 'react';
import ListItem from '../ListItem/index.jsx';

// const propTypes = {
//     items: PropTypes.array.isRequired
// };

function List({items}) {
    console.log('-----List/index.jsx start---------');
    console.log(items);
    console.log('-----List/index.jsx end---------');
    const itemContent = items.map(
        item => {
            <ListItem item={item} key={item.id}/>
        }
    );

    return (
        <div className="list-component">{itemContent}</div>
    )
}

// List.propTypes = propTypes;

export default List;
