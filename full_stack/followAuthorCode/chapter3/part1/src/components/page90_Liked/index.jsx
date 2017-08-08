/**
 * Created by Administrator on 2017/8/8 0008.
 */

import React from 'react';
import {render} from 'react-dom';

class Page90_Liked extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: 0
        };
        // this.likedCallback = this.likedCallback.bind(this);                  //对应line30
    }

    likedCallback() {
        let liked = this.state.liked;
        liked++;
        this.setState({
            liked: liked
        });
    }

    render() {
        return (
            <div>
                <h5>我的名字叫{this.props.name}</h5>
                <h6>我今年{this.props.age}岁</h6>
                {/*<button onClick={this.likedCallback}>给我点赞</button>*/}
                <button onClick={this.likedCallback.bind(this)}>给我点赞</button>
                <p>总点赞数：{this.state.liked}</p>
            </div>
        )
    }
}

export default Page90_Liked;
