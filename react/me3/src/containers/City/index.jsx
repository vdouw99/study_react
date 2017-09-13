/**
 * Created by Administrator on 2017/9/6 0006.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Header from '../../components/Header/index.jsx';

class Index extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div>
                <Header title="选择城市" />
            </div>
        );
    }

    conponentDidMount() {
        console.log('----containers/City/index.jsx------');
        console.log(this.props.userinfo);
        console.log(this.props.userinfoActions);
    }
}

export default Index;

