/**
 * Created by Administrator on 2017/8/8 0008.
 */

import React, {PropTypes} from 'react';
import {render} from 'react-dom';

// 需要验证的属性
const propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequred
};

class Page89PropTypes extends React.Component {
    render() {
        return (
            <div className="profile-component">
                <h5>我的名字叫{this.props.name}</h5>
                <h6>我今年{this.props.age}岁</h6>
            </div>
        )
    }
}

// 将验证赋值给这个组件的propTypes属性
Page89PropTypes.proTypes = propTypes;

export default Page89PropTypes;
