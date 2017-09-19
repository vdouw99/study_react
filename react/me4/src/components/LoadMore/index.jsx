/**
 * Created by Administrator on 2017/9/19 0019.
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
            <div className="load-more" ref="wrapper">
                <span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
            </div>
        );
    }

    loadMoreHandle() {
        this.props.loadMoreFn();
    }
}

export default Index;