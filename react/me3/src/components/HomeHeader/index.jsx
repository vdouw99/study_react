/**
 * Created by Administrator on 2017/9/6 0006.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Link, hashHistory} from 'react-router';

import './index.less';

class Index extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {kwd: ''};
    }

    render() {
        return (
            <div id="home-header" className="clear-fix">
                <div className="home-header-left float-left">
                    <Link to="/city">
                        <span>{this.props.cityName}</span>
                        <i className="icon-angle-down ml-3"/>
                    </Link>
                </div>
                <div className="home-header-right float-right">
                    <i className="icon-user"/>
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="icon-search"/>
                        <input type="text" placeholder="请输入关键字" value={this.state.kwd}
                               onChange={this.changeHandle.bind(this)} onKeyUp={this.keyUpHandle.bind(this)}/>
                    </div>
                </div>
            </div>
        )
    }

    changeHandle(e) {
        this.setState({kwd: e.target.value});
    }

    keyUpHandle(e) {
        if (e.keyCode == 13) {
            hashHistory.push('/search/all/' + encodeURIComponent(this.state.kwd));
        }
    }
}

export default Index;