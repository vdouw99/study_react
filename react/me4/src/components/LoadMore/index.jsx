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
                {
                    this.props.isLoadingMore
                        ? <span>加载中...</span>
                        : <span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
                }
            </div>
        );
    }

    loadMoreHandle() {
        this.props.loadMoreFn();
    }

    componentDidMount() {
        const loadMoreFn = this.props.loadMoreFn;
        const wrapper = this.refs.wrapper;
        let timeoutID;
        window.addEventListener('scroll', function () {
            if (this.props.isLoadingMore) return false;
            if (timeoutID) clearTimeout(timeoutID);
            timeoutID = setTimeout(callback, 50);
        }.bind(this), false);
        function callback() {
            const top = wrapper.getBoundingClientRect().top;
            const windowHeight = window.screen.height;
            if (top && top < windowHeight) {
                loadMoreFn();
            }
        }
    }
}

export default Index;