/**
 * Created by Administrator on 2017/9/18 0018.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import {getAdData} from '../../../fetch/home/index.js';
import HomeAd from '../../../components/HomeAd/index.jsx';

class Index extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {data: []};
    }

    render() {
        return (
            <div>
                {
                    this.state.data.length
                        ? <HomeAd data={this.state.data}/>
                        : <div>无货</div>
                }
            </div>
        );
    }

    componentDidMount() {
        const result = getAdData();
        result.then((res)=> {
            // console.log(res);
            return res.json();
        }).then((data)=> {
            // console.log(data);
            if (data.length) this.setState({data: data});
        });
    }
}

export default Index;