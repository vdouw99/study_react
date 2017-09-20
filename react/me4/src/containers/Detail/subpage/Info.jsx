/**
 * Created by Administrator on 2017/9/20 0020.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import {getInfoData} from '../../../fetch/detail/index.js';
import DetailInfo from '../../../components/DetailInfo/index.jsx';

class Index extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {info: false};
    }

    render() {
        return (
            <div>
                {
                    this.state.info
                        ? <DetailInfo data={this.state.info}/>
                        : ''
                }
            </div>
        );
    }

    componentDidMount() {
        this.getInfo();
    }

    getInfo() {
        const id = this.props.id;
        const result = getInfoData(id);
        result.then(res => {
            return res.json();
        }).then(json => {
            this.setState({info: json});
            // console.log(json);
        }).catch(ex => {
            console.error('详情页，获取商户信息出错');
        });
    }
}

export default Index;