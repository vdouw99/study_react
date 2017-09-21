/**
 * Created by Administrator on 2017/9/21 0021.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './index.less'

class Index extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div className="userinfo-container">
                <p>
                    <i className="icon-user"/>
                    <span>{this.props.username}</span>
                </p>
                <p>
                    <i className="icon-map-marker"/>
                    <span>{this.props.city}</span>
                </p>
            </div>
        );
    }
}

export default Index;