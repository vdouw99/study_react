/**
 * Created by sf on 2017/7/1.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {render} from 'react-dom';

import Header from '../../components/header/index.jsx';

import '../../script/main.js';
import '../../style/common.css';
import '../../style/flex.css';

// 定义组件
class Hello extends React.Component {

    constructor(props, context) {
        super(props, context);
        // 性能优化
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            now1: Date()
        }
    }

    // 必须定义的一个render函数，用于存放模板
    render() {
        var str = 100;
        var arr = ['张', '三', '丰'];
        var propObj = {a: '父组件通过props向子组件传值（值为对象）', b: 'bb'};
        return (
            <div onClick={this.clickParent}>
                <Header title={propObj}/>
                <p>hello world, jsx is normal.</p>
                <input type="button" value="点击更新当前时间" onClick={this.showTime.bind(this)}
                       style={{padding:'5px 20px',display:'block'}}/>
                <div>{this.state.now1}</div>
                <div className="flex-div" style={{fontSize:'20px'}}>
                    <div className="left" ref="left" data-id="leftID" onClick={this.clickHandler.bind(this)}>
                        点击查看当前时间
                    </div>
                    <div className="right">right</div>
                    {/*这是注释*/}
                </div>
                <p>{str == 100 ? '变量是100！' : '变量不是100！'}</p>
                <ul>
                    {arr.map(function (item, index) {
                        return <li data-key={index}>{item}</li>
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

    showTime(e) {
        e.stopPropagation();
        this.setState({
            now1: Date()
        })
    }

    componentDidMount() {
        // 组件第一次加载时渲染完成的事件，一般在此获取网络数据。实际开始项目开发时，会经常用到。
    }

    shouldComponentUpdate() {
        // 主要用于性能优化
    }

    componentDidUpdate() {
        // 组件更新了之后触发的事件，一般用于清空并更新数据。实际开始项目开发时，会经常用到。
    }

    componentWillUnmount() {
        // 组件在销毁之前触发的事件，一般用户存储一些特殊信息，以及清理setTimeout事件等
    }

}

export default Hello;