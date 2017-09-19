/**
 * Created by Administrator on 2017/9/19 0019.
 */

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './index.less'

class Index extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div className="load-more" ref="wrapper">
                <span>加载更多</span>
            </div>
        );
    }
}

export default Index;