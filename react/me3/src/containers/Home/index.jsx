/**
 * Created by Administrator on 2017/9/6 0006.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';

import HomeHeader from '../../components/HomeHeader/index.jsx';

class Index extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div>
                {/*<HomeHeader cityName={this.props.userinfo.cityName}/>*/}
                <HomeHeader cityName='北京'/>
            </div>
        );
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

