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
        var str = 100;
        return (
            <div>
                <p>hello world, jsx is normal.</p>
                <div className="flex-div" style={{fontSize:'20px'}}>
                    <div className="left">left</div>
                    <div className="right">right</div>
                    {/*这是注释*/}
                </div>
                {str == 100 ? '变量是100！' : '变量不是100！'}
            </div>
        )
    }
}

render(
    <Hello />,
    document.getElementById('root')
);
