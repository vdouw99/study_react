/**
 * Created by Administrator on 2017/8/8 0008.
 */

import React, {PropTypes} from 'react';
import {render} from 'react-dom';

const propTypes = {
    hobby: PropTypes.string.isRequired
};

// class Hobby extends React.Component {
//     render() {
//         return (
//             <li>
//                 {this.props.hobby}
//             </li>
//         )
//     }
// }

// 无状态函数式组件
// 没有内部state，不需要组件生命周期函数，只需要根据输入生成组件。
function Hobby(props) {
    return (
        <li>{props.hobby}</li>
    )
}

Hobby.propTypes = propTypes;

export default Hobby;