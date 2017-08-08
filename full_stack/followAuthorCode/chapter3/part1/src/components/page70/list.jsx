/**
 * Created by Administrator on 2017/8/8 0008.
 */

import React from 'react';
import {render} from 'react-dom';
import './list.css';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [1, 2, 3],
            activeIndex: 0
        };
    }

    activate(index) {
        this.setState({activeIndex: index});
    }

    render() {
        const {list, activeIndex} = this.state;

        const lis = list.map((item, index)=> {
            const cls = index === activeIndex ? 'active' : '';
            return (
                <li key={index} className={cls} onClick={()=>this.activate(index)}></li>
            )
        });
        return (
            <ul id="page70">{lis}</ul>
        )
    }
}

export default List;
