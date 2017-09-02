/**
 * Created by sf on 2017/9/2.
 */

import React from 'react';
import Todo from './Todo.jsx';

const TodoList = ({todos, onTodoClick})=> {
    console.log('-----TodoList.jsx----');
    console.log(todos);
    console.log(onTodoClick);
    return (
        <ul>
            {
                todos.map(function (todo) {
                    return (
                        <Todo {...todo} key={todo.id} onClick={function(){onTodoClick(todo.id)}}/>
                    )
                })
            }
        </ul>
    );
};

export default TodoList;
