/**
 * Created by Administrator on 2017/9/19 0019.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import ListComponent from '../../../components/List/index.jsx';
import LoadMore from '../../../components/LoadMore/index.jsx';

import {getListData} from '../../../fetch/home/index.js';

import './list.less';

class Index extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],               // 列表信息
            hasMore: false,         // 当前状态下，是否还有更多的数据
            isLoadingMore: false,   // 当前状态下，是加载中，还是点击加载更多
            page: 1                 // 下一页的页码，首屏页码为0
        };
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
                {
                    this.state.hasMore
                        ? <LoadMore loadMoreFn={this.loadMoreData.bind(this)}/>
                        : ''
                }
            </div>
        );
    }

    componentDidMount() {
        // console.log('---containers/Home/subpage/List.jsx---');
        // console.log(this.props.cityName);
        this.loadFirstPageData();
    }

    loadFirstPageData() {
        const cityName = this.props.cityName;
        const result = getListData(cityName, 0);
        // console.log(result);
        this.resultHandle(result);
    }

    loadMoreData() {
        this.setState({isLoadingMore: true});
        const cityName = this.props.cityName;
        const page = this.state.page;
        const result = getListData(cityName, page);
        this.resultHandle(result);
        this.setState({
            page: page + 1,
            isLoadingMore: false
        });
    }

    // 数据处理
    resultHandle(result) {
        result.then((res)=> {
            // console.log('-----猜你喜欢-----');
            // console.log(res);
            return res.json();
        }).then((json)=> {
            // console.log(json);
            this.setState({
                data: this.state.data.concat(json.data),
                hasMore: json.hasMore
            });
        })
    }
}

export default Index;