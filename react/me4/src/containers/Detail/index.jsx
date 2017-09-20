/**
 * Created by Administrator on 2017/9/12 0012.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link} from 'react-router';

import Header from '../../components/Header/index.jsx';
import Info from './subpage/Info.jsx';
import Comment from './subpage/Comment.jsx';

class Index extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        const id = this.props.params.id;
        return (
            <div>
                <Header title="商户详情"/>
                <Info />
                <Comment id={id}/>
            </div>
        )
    }

    componentDidMount() {

    }
}

export default Index;
