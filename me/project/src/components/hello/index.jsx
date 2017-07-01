/**
 * Created by sf on 2017/7/1.
 */

import React from 'react';
import {render} from 'react-dom';

import '../../script/main.js';
import '../../style/common.css';
import '../../style/flex.css';

// 定义组件
class Hello extends React.Component {

    // 必须定义的一个render函数，用于存放模板
    render() {
        var str = 100;
        var arr = ['张', '三', '丰'];
        return (
            <div onClick={this.clickParent}>
                <p>hello world, jsx is normal.</p>
                <div className="flex-div" style={{fontSize:'20px'}}>
                    <div className="left" ref="left" data-id="leftID" onClick={this.clickHandler.bind(this)}>
                        点击查看当前时间
                    </div>
                    <div className="right">right</div>
                    {/*这是注释*/}
                </div>
                {str == 100 ? '变量是100！' : '变量不是100！'}
                <ul>
                    {arr.map(function (item, index) {
                        return <li data-key={index+1}>{item}</li>
                    })}
                </ul>
            </div>
        )
    }

    // 自定义事件
    clickHandler(e) {
        e.stopPropagation();        //阻止冒泡
        e.preventDefault();         //阻止默认
        alert(new Date());
        alert(this.refs.left.innerHTML);
        alert(this.refs.left.getAttribute('data-id'));
    }

    clickParent() {
        alert('parentEvent');
    }

}

export default Hello