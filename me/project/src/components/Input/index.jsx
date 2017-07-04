/**
 * Created by sf on 2017/7/4.
 */

import React from 'react';
import {render} from 'react-dom';

class Input extends React.Component {
    render() {
        return (
            <div>
                <input type="text" onBlur={this.changeHandler.bind(this)} value="失去焦点获取value"/>
            </div>
        )
    }

    changeHandler(e) {
        alert(e.target.value);
    }

    
}

export default Input