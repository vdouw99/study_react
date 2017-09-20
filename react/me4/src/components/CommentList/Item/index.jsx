/**
 * Created by Administrator on 2017/9/20 0020.
 */

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Star from '../../Star/index.jsx';

import './index.less';

class Index extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const item = this.props.data;
        return (
            <div className="comment-item">
                <h3>
                    <i className="icon-user"/>
                    {item.username}
                </h3>
                <Star star={item.star}/>
                <p>{item.comment}</p>
            </div>
        )
    }
}

export default Index;