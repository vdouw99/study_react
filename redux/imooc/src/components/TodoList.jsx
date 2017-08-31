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
                    <Todo {...todo} key={todo.id} onClick={function(){onTodoClick(todo.id)}}/>
                );
            })}
        </ul>
    );

    // return (
    //     <ul>
    //         {todos.map(todo =>
    //             <Todo key={todo.id}{...todo} onClick={() => onTodoClick(todo.id)}/>
    //         )}
    //     </ul>
    // );
};


export default TodoList;