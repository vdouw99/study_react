/**
 * Created by sf on 2017/7/18.
 */

import React from 'react';

class Counter extends React.Component {
    constructor(props, context) {
        super(props, context);
        console.log('加载的时候执行');
    }

    incrementIfOdd() {
        if (this.props.value % 2 !== 0) {
            this.props.onIncrement()
        }
    }

    incrementAsync() {
        setTimeout(this.props.onIncrement, 1000)
    }

    render() {
        const {value,onIncrement,onDecrement} = this.props;
        // alert(value);    // 实时查看store中value值的变化
        // alert(onIncrement); // function onIncrement(){return store.dispatch({type:'INREMENT'})}
        return (
            <div>
                <span>clicked:</span>
                <span>{value}</span>
                <span>times</span>
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
                <button onClick={this.incrementIfOdd.bind(this)}>Increment if odd</button>
                <button onClick={this.incrementAsync.bind(this)}>Increment async</button>
            </div>
        )
    }
}

export default Counter;
