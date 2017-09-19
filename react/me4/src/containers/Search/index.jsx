/**
 * Created by Administrator on 2017/9/12 0012.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import SearchHeader from '../../components/SearchHeader/index.jsx';
import SearchList from './subpage/List.jsx';

class Index extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        const params = this.props.params;
        console.log(params);
        return (
            <div>
                <SearchHeader keyword={params.keyword}/>
                <SearchList keyword={params.keyword} category={params.category}/>
            </div>
        )
    }
}

export default Index;
