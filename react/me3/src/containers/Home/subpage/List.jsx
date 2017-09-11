/**
 * Created by Administrator on 2017/9/9 0009.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import {getListData} from '../../../fetch/home/index.js';
import ListComponent from '../../../components/List/index.jsx';

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
                {
                    this.state.data.length
                        ? <ListComponent data={this.state.data}/>
                        : <div>加载中...</div>
                }
                <p>
                    {
                        this.state.hasMore.toString()
                            ? 'this.state.hasMore: hasMore'
                            : 'this.state.hasMore: noMore'
                    }
                </p>
                <p>this.state.data.length: {this.state.data.length}</p>
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
            this.setState({data: data.data, hasMore: data.hasMore});
        })
    }
}

export default Index;