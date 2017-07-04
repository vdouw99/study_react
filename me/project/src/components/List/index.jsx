/**
 * Created by sf on 2017/7/4.
 */

import React from 'react';
import {render} from 'react-dom';

class List extends React.Component {
    render() {
        const data = this.props.todos;  // 接收父组件的传值
        return (
            <ul style={{marginTop:'10px',fontSize:'15px',lineHeight:'30px'}}>
                {data.map((item, index)=> {
                    return <li data-key={index} data-id={item.id}
                               onClick={this.clickHandler.bind(this,item.id)}>{item.text}</li>
                })}
            </ul>
        )
    }

    clickHandler(id) {
        this.props.deleteFn(id);
    }
}

export default List;
