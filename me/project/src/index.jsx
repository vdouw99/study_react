/**
 * Created by sf on 2017/6/29.
 */

import React from 'react';
import {render} from 'react-dom';

import './script/main.js';
import './style/common.css';
import './style/flex.css';

// 定义组件
class Hello extends React.Component {
    // 定义的一个函数
    render() {
        return (
            <div>
                <p>hello world, jsx is normal.</p>
                <div className="flex-div">
                    <div className="left">left</div>
                    <div className="right">right</div>
                </div>
            </div>
        )
    }
}

render(
    <Hello />,
    document.getElementById('root')
);
