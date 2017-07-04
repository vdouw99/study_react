/**
 * Created by sf on 2017/7/4.
 */

import React from 'react';
import {render} from 'react-dom';

class List extends React.Component {
    render() {
        return (
            <ul style={{marginTop:'10px',fontSize:'15px',lineHeight:'30px'}}>
                <li>123</li>
                <li>456</li>
            </ul>
        )
    }
}

export default List;
