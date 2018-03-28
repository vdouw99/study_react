/**
 * Created by Administrator on 2017/9/20 0020.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Item from './Item/index.jsx';

import './index.less';

class Index extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        // https://segmentfault.com/a/1190000006100489
        // PureRenderMixin的原理就是它实现了shouldComponentUpdate，在shouldComponentUpdate内它比较当前的props、state和接下来的props、state，当两者相等的时候返回false，这样组件就不会进行虚拟DOM的diff。
    }

    render() {
        const data = this.props.data;
        return (
            <div className="comment-list">
                {
                    data.map((item, index) => {
                        return <Item key={index} data={item}/>
                    })
                }
            </div>
        )
    }
}

export default Index;