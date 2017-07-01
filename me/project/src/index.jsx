/**
 * Created by sf on 2017/6/29.
 */

import React from 'react';
import {render} from 'react-dom';
import './js.js';

// 定义组件
class Hello extends React.Component {
    // 定义的一个函数
    render() {
        return (
            <p>hello world, jsx is normal.</p>
        )
    }
}

render(
    <Hello />,
    document.getElementById('root')
);
