/**
 * Created by Administrator on 2017/8/30 0030.
 */

import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions/index.jsx';

let AddTodo = ({dispatch}) => {
    let input;
    return (
        <div>
            <form onSubmit={e => {
				e.preventDefault();
				if(!input.value.trim())return;
				dispatch(addTodo(input.value));
				input.value='';
			}}>
                <input ref={node =>{input=node}}/>
                <button type="submit">
                    AddTodo
                </button>
            </form>
        </div>
    );
};
// Redux如何调用事件（比如添加待办事项AddTodo）
// 1、在actions/index.jsx定义事件
// 2、引入用户的抽象行为 import 'actions/index.jsx'
// 3、调用用户的抽象行为 dispatch(addTodo())


// 高阶函数：函数里面返回函数
AddTodo = connect()(AddTodo);

export default AddTodo;


// ------ container组件的基础写法:start -------
// import React from 'react';
// import {connect} from 'react-redux';
// let AddTodo = function () {
//     return (
//         <div>123</div>
//     );
// };
// AddTodo = connect()(AddTodo);
// export default AddTodo;
// ------ container组件的基础写法:end -------



