/**
 * Created by Administrator on 2017/9/6 0006.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Index extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div>
                <h1>City</h1>
            </div>
        );
    }

    conponentDidMount(){
        console.log('----containers/City/index.jsx------');
        console.log(this.props.userinfo);
        console.log(this.props.userinfoActions);
    }
}

export default Index;

