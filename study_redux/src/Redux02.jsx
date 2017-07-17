/**
 * Created by sf on 2017/7/17.
 */

import React from 'react';
import {render} from 'react-dom';

import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';


class Redux02 extends React.Component {
    render() {
        const {text, onChangetext, onButtonClick} = this.props;
        return (
            <Provider store={store}>
                <div>
                    <h1 onClick={onChangetext}>{text}</h1>
                    <button onclick={onButtonClick}>Click Me</button>
                </div>
            </Provider>

        )
    }
}

//action
const changeTextAction = {
    type: 'CHANGE_TEXT'
}
const buttonClickAction = {
    type: 'BUTTON_CLICK'
}


//reducer
const initialState = {
    text: 'Hello'
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_TEXT':
            return {
                text: state.text == 'Hello' ? 'world' : 'Hello'
            }
        case 'BUTTON_CLICK':
            return {
                text: 'Hello world'
            }
        default:
            return initialState;
    }
}

//store
let store = createStore(reducer);

//映射Redux state到组件的属性
function mapStateToProps(state) {
    return {text: state.text}
}

//映射Redux actions到组件的属性
function mapDispatchToProps(dispatch) {
    return {
        onButtonClick: ()=>dispatch(buttonClickAction),
        onChangeText: ()=>dispatch(changeTextAction)
    }
}

//连接组件
// var Redux02 = connect(mapStateToProps, mapDispatchToProps)(Redux02);

export default Redux02;
