/**
 * Created by sf on 2017/7/4.
 */

import React from 'react';
import {render} from 'react-dom';

class Input extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            value: ''       // 声明一个变量，也就是声明一个react属性
        }
    }

    render() {
        return (
            <div>
                <input type="text"
                       onChange={this.changeHandler.bind(this)}
                       onKeyUp={this.keyUpHandler.bind(this)}
                       value={this.state.value}/>
                {/*将react变量绑定到DOM元素上*/}
            </div>
        )
    }

    changeHandler(e) {
        this.setState({
            value: e.target.value       // 将react变量state.value重新赋值
        })
    }

    keyUpHandler(e) {
        const value = this.state.value;
        if (e.keyCode === 13 && value.trim()) {
            // this.props.
            this.setState({value: ''});
            console.log(this.state.value);
        }
    }


}

export default Input