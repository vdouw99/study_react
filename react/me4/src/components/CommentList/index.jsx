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