/**
 * Created by Administrator on 2017/8/30 0030.
 */

import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions/index.jsx';

let AddTodo = ()=> {
    let input;
    return (
        <form onSubmit={e=>{
            e.preventDefault();
            if(!input.value.trim()){return;}
            dispatch(addTodo(input.value));
            input.value='';
        }}>
            <input ref={node=>{input=node}}/>
            <button type="submit">AddTodo</button>
        </form>
    );
};

// 高阶函数的写法
AddTodo = connect()(AddTodo);

export default AddTodo;
