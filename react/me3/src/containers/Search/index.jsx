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
                <h1>Search - {this.props.params.category} - {this.props.params.keyword}</h1>
            </div>
        );
    }

    componentDidMount(){
        console.log(this.props.params.category + '|' + this.props.params.keyword);
    }
}

export default Index;

