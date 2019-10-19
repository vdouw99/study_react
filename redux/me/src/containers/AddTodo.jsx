/**
 * Created by Administrator on 2017/9/1 0001.
 */

import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions/index.jsx';

let AddTodo = ({dispatch})=> {
    let inputFromRefs = '';
    return (
        <form onSubmit={e=>{
            e.preventDefault();
            if(!inputFromRefs.value.trim()) return;
            dispatch(addTodo(inputFromRefs.value));
            inputFromRefs.value='';
        }}>
            <input ref={node=>{inputFromRefs=node}}/>
            <button type="submit">添加待办事项</button>
        </form>
    );
};

AddTodo = connect()(AddTodo);

export default AddTodo;


