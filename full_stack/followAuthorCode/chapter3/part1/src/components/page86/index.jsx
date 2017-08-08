/**
 * Created by Administrator on 2017/8/8 0008.
 */

import React from 'react';
import {render} from 'react-dom';

export default class Page86 extends React.Component {
    render(){
        return(
            <div className="profile-component">
                <h5>我的名字叫{this.props.name}</h5>
                <h6>我今年{this.props.age}岁</h6>
            </div>
        )
    }
}
