/**
 * Created by Administrator on 2017/9/6 0006.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ReactSwipe from 'react-swipe';

import img1 from '../../static/images/gg.jpg';

import './index.less';

class Index extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    componentDidMount() {
        console.log(ReactSwipe);
    }

    render() {
        return (
            <div id="home-category">
                <div>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <li className="float-left jingdian">景点</li>
                            <li className="float-left ktv">KTV</li>
                            <li className="float-left gouwu">购物</li>
                            <li className="float-left shenghuofuwu">生活服务</li>
                            <li className="float-left jianshenyundong">健身运动</li>
                            <li className="float-left meifa">美发</li>
                            <li className="float-left qinzi">亲子</li>
                            <li className="float-left xiaochikuaican">小吃快餐</li>
                            <li className="float-left zizhucan">自助餐</li>
                            <li className="float-left jiuba">酒吧</li>
                            <img src={img1}/>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;