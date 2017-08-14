/**
 * Created by Administrator on 2017/8/9 0009.
 */

import React, {PropTypes} from 'react';
import ListItem from '../ListItem/index.jsx';

const propTypes = {
    items: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired
};

function List({items, onSelect}) {
    const itemsContent = items.map(
        item =>(
            <ListItem item={item} key={item.id} onClick={()=>onSelect(item.id)}/>
        )
    );
    return (
        <div className="list-component">{itemsContent} - itemsContent</div>
    );
}

List.propTypes = propTypes;

export default List;
