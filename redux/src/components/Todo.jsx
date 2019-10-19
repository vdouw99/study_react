/**
 * Created by Administrator on 2017/8/30 0030.
 */

import React from 'react';

const Todo = ({onClick, completed, text}) =>(
    <li onClick={onClick} style={{textDecoration:completed ? "line-through" : "none"}}>
        {text}
    </li>
);

export default Todo;
