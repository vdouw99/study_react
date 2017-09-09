/**
 * Created by Administrator on 2017/9/9 0009.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import {getListData} from '../../../fetch/home/index.js';

import './index.less';

class Index extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {data: [], hasMore: false};
    }

    render() {
        return (
            <div>
                <h2 className="home-list-title">猜你喜欢</h2>
                {this.state.hasMore.toString()}
                {this.state.data.length}
            </div>
        );
    }

    componentDidMount() {
        this.loadeFirstPageData();
    }

    // 获取首页数据
    loadeFirstPageData() {
        const cityName = this.props.cityName;
        const result = getListData(cityName, 0);
        console.log(result);
        this.resultHandle(result);
    }

    // 数据处理
    resultHandle(result) {
        result.then((res)=> {
            console.log('-----猜你喜欢-----');
            console.log(res);
            return res.json();
        }).then((data)=> {
            console.log(data);
            const hasMore = data.hasMore;
            const d = data.data;
            this.setState({data: d, hasMore: hasMore});
        })
    }
}

export default Index;