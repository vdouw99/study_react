/**
 * Created by Administrator on 2017/8/30 0030.
 */

import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, onTodoClick}) => {
    console.log(onTodoClick);

    return (
        <ul>
            {todos.map(function (todo) {
                return (
                    <Todo key={todo.id} onClick={function(){onTodoClick(todo.id)}}
                        {...todo}
                    />
                );
            })}
        </ul>
    );
    // {...todo} 是ES6的语法糖，就等于：completed={todo.completed} text={todo.text}
};


export default TodoList;