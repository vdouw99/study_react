/**
 * Created by sf on 2017/7/4.
 */

import React from 'react';
import {render} from 'react-dom';

class List extends React.Component {
    render() {
        return (
            <ul style={{marginTop:'10px',fontSize:'15px',lineHeight:'30px'}}>
                <li onClick={this.deleteFn.bind(this)}>123</li>
                <li onClick={this.deleteFn.bind(this)}>456</li>
            </ul>
        )
    }

    deleteFn(event) {
        alert(event.target.innerHTML);
    }
}

export default List;
