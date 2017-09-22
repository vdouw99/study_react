/**
 * Created by Administrator on 2017/9/12 0012.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link} from 'react-router';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userinfoActionsFromFile from '../actions/userinfo.jsx';

import Util from '../util/index.jsx';
import {CITYNAME} from '../config/index.jsx';

class Index extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {initDone: false};
    }

    render() {
        return (
            <div>
                {
                    this.state.initDone
                        ? this.props.children
                        : <div>正在加载...</div>
                }
                <br/>
                <br/>
                <br/>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/detail/1">detail/1</Link></li>
                    <li><Link to="/detail/2">detail/2</Link></li>
                    <li><Link to="/detail/3">detail/3</Link></li>
                    <li><Link to="/city">City</Link></li>
                    <li><Link to="/notFound">NotFound</Link></li>
                </ul>
            </div>
        )
    }

    // 在render完成且组件装载完成后调用（比如AJAX请求等）
    componentDidMount() {
        let cityName = Util.getLocalStorage(CITYNAME);
        if (cityName == null) cityName = '北京';
        // 将城市信息存储到Redux中
        this.props.userinfoActions.update({
            cityName: cityName
        });
        setTimeout(()=> {
            this.setState({initDone: true});
            Util.setLocalStorage(CITYNAME, cityName);
        }, 1000);
    }
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        userinfoActions: bindActionCreators(userinfoActionsFromFile, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
