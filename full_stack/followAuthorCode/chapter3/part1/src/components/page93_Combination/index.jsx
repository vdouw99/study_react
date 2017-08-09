/**
 * Created by Administrator on 2017/8/8 0008.
 */

import React from 'react';
import {render} from 'react-dom';
import Hobby from './Hobby.jsx';

class Page91_Lifecycle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: 0,
            hobbies: ['PHP', 'HTML5', '中国象棋']
        }
    }

    likedCallback() {
        let liked = this.state.liked;
        liked++;
        this.setState({liked: liked});
    }

    // 传说中的生命周期，难道是我没有理解其真谛？！
    // componentDidMount() 是在render完成并且组件装载完成之后调用的方法
    componentDifMount() {
        setTimeout(()=> {
            this.likedCallback()
        }, 1000);
    }

    render() {
        return (
            <div>
                <h5>我的名字是{this.props.name}</h5>
                <h6>我今年{this.props.age}</h6>
                <button onClick={this.componentDifMount.bind(this)}>点赞</button>
                <p>总点赞数：{this.state.liked}</p>
                <h6>我的爱好是：</h6>
                <ul>{this.state.hobbies.map((hobby, i)=><Hobby key={i} hobby={hobby}/>)}</ul>
            </div>
        )
    }
}

export default Page91_Lifecycle;
