/**
 * Created by Administrator on 2017/9/6 0006.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Header from '../../components/Header/index.jsx';
import CurrentCity from '../../components/CurrentCity/index.jsx';

class Index extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div>
                <Header title="选择城市"/>
                <CurrentCity cityName={this.props.userinfo.cityName}/>
            </div>
        );
    }

    componentDidMount() {
        console.log('----containers/City/index.jsx------');
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

