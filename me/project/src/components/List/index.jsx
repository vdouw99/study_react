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
                {data.map((item,index)=>{
                    return <li data-key={index} data-id={item.id} onClick={this.deleteFn.bind(this)}>{item.text}</li>
                })}
            </ul>
        )
    }

    deleteFn(event) {
        alert(event.target.innerHTML);
    }
}

export default List;
