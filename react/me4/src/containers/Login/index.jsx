/**
 * Created by Administrator on 2017/9/21 0021.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {hashHistory} from 'react-router';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userinfoActionsFromOtherFile from '../../actions/userinfo.jsx';

import Header from '../../components/Header/index.jsx';
import LoginComponent from '../../components/Login/index.jsx';

class Index extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            checking: true   //正在检查
        };
    }

    render() {
        return (
            <div>
                <Header title="登录"/>
                {
                    this.state.checking
                        ? <div>等待登录...</div>
                        : <LoginComponent loginHandle={this.loginHandle.bind(this)}/>
                }
            </div>
        );
    }

    componentDidMount() {
        this.doCheck();
    }

    doCheck() {
        const userinfo = this.props.userinfo;
        if (userinfo.username) {
            // 已经登录，则跳转到用户主页
            this.goUserPage();
        } else {
            // 未登录，则验证结束
            this.setState({checking: false});
        }
    }

    goUserPage() {
        // 跳转到“用户中心”页面
        hashHistory.push('/user');
    }

    // 登录成功后的处理
    loginHandle(username) {
        const actions = this.props.userinfoActions;
        let userinfo = this.props.userinfo;
        userinfo.username = username;
        actions.userinfoUpdate(userinfo);
        const params = this.props.params;   //获取路由参数
        const router = params.router;
        if (router) {
            hashHistory.push(router);   //跳转到指定的页面
        } else {
            this.goUserPage();  //跳转到“用户中心”页面
        }
    }
}

function mapStateToProps(state) {
    return {userinfo: state.userinfo};
}

function mapDispatchToProps(dispatch) {
    return {
        userinfoActions: bindActionCreators(userinfoActionsFromOtherFile, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
