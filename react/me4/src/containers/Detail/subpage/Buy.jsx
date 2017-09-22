/**
 * Created by Administrator on 2017/9/20 0020.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {hashHistory} from 'react-router';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as storeActionsFromFile from '../../../actions/store.jsx';

import BuyAndStore from '../../../components/BuyAndStore/index.jsx';

class Index extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {isStore: false};
    }

    render() {
        return (
            <div>
                <BuyAndStore
                    isStore={this.state.isStore}
                    buyHandle={this.buyHandle.bind(this)}
                    storeHandle={this.storeHandle.bind(this)}
                />
            </div>
        );
    }

    // 购买事件
    buyHandle() {
        //先验证登录
        const loginFlag = this.loginCheck();
        if (!loginFlag) return false;
        console.log('购买功能暂没做');
        hashHistory.push('/user');
    }

    // 收藏事件
    storeHandle() {
        //先验证登录
        const loginFlag = this.loginCheck();
        if (!loginFlag) return false;
    }

    //验证登录
    loginCheck() {
        const id = this.props.id;
        const userinfo = this.props.userinfo;
        if (!userinfo.username) {
            hashHistory.push('/login/' + encodeURIComponent('detail/') + id);
            return false;
        } else {
            return true;
        }
    }

    componentDidMount() {
        console.log('--containers/Detail/subpage/Buy.jsx---');
        console.log(123, this.props.userinfo);
        console.log(456, this.props.store);
        console.log(789, this.props.storeActions);
    }

}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo,
        store: state.store
    };
}

function mapDispatchToProps(dispatch) {
    return {
        storeActions: bindActionCreators(storeActionsFromFile, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Index);