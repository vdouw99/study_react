/**
 * Created by Administrator on 2017/9/6 0006.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './index.less';

class Index extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div id="home-header" className="clear-fix">
                <div className="home-header-left float-left">
                    <span>{this.props.cityName}</span>
                    <i className="icon-angle-down ml-3"/>
                </div>
                <div className="home-header-right float-right">
                    <i className="icon-user"/>
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="icon-search"/>
                        <input type="text" placeholder="请输入关键字"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Index;