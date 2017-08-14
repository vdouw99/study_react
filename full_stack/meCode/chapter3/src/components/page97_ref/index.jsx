/**
 * Created by Administrator on 2017/8/8 0008.
 */

import React from 'react';
import {render} from 'react-dom';
import Hobby from './Hobby.jsx';

class Page97_Lifecycle extends React.Component {
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
    
    componentDifMount() {
        setTimeout(()=> {
            this.likedCallback()
        }, 1000);
    }

    addHobbyCallback() {
        var hobbyInput = this.refs.hobby;
        var val = hobbyInput.value;
        if (val) {
            let hobbies = this.state.hobbies;
            hobbies = [...hobbies, val];
            this.setState({
                hobbies: hobbies
            }, ()=> {
                hobbyInput.value = "";
            })
        }
    }

    render() {
        return (
            <div>
                <h5>我的名字是{this.props.name}</h5>
                <h6>我今年{this.props.age}</h6>
                <button onClick={this.componentDifMount.bind(this)}>点赞</button>
                <p>总点赞数：{this.state.liked}</p>
                <h6>我的爱好：</h6>
                <ul>{this.state.hobbies.map((hobby, i)=><Hobby key={i} hobby={hobby}/>)}</ul>
                <input type="text" ref="hobby"/>
                <button onClick={this.addHobbyCallback.bind(this)}>添加爱好</button>
            </div>
        )
    }
}

export default Page97_Lifecycle;
