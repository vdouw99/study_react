/**
 * Created by Administrator on 2017/9/12 0012.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link} from 'react-router';

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import HomeHeader from '../../components/HomeHeader/index.jsx';
import Category from '../../components/Category/index.jsx';

class Index extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div>
                <HomeHeader cityName={this.props.userinfo.cityName}/>
                <Category />
            </div>
        )
    }

    componentDidMount() {
        console.log(this.props.userinfo);
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    };
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
