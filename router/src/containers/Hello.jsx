/**
 * Created by sf on 2017/9/4.
 */

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as userinfoActions from '../actions/index.jsx';
import A from '../components/A.jsx';
import B from '../components/B.jsx';
import C from '../components/C.jsx';

class Hello extends React.Component {
    // 加载时执行
    componentDidMount() {
        // 模拟登陆
        this.props.userinfoActions.login({userid: 'abc', city: 'beijing'});
    }

    render() {
        return (
            <div>
                <p>hello world</p>
                <hr />
                <A userinfo={this.props.userinfo}/>
                <hr/>
                <B userinfo={this.props.userinfo}/>
                <hr/>
                <C actions={this.props.userinfoActions}/>
            </div>
        );
    }
}

// 给子组件传递数据
function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
        // state.userinfo对应的是reducers/index.jsx中合并combineReducers的userinfo，
        // 可简单理解为页面的响应
    };
}

// 给子组件派发行为
function mapDispatchToProps(dispatch) {
    return {
        userinfoActions: bindActionCreators(userinfoActions, dispatch)
        // userinfoActions对应的是action.jsx中的方法，
        // 可简单理解为用户触发的事件
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
