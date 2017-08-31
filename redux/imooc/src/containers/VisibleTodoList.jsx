/**
 * Created by Administrator on 2017/8/30 0030.
 */

import React from 'react';
import {connect} from 'react-redux';
import {toggleTodo} from '../actions/index.jsx';
import TodoList from '../components/TodoList.jsx';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case "SHOW_ALL":
            return todos;
        case "SHOW_COMPLETED":
            // return todos.filter(t => t.completed);
            return todos.filter(function (t) {
                return t.completed == true;
            });
        case "SHOW_ACTIVE":
            // return todos.filter(t => !t.completed);
            return todos.filter(function (t) {
                return t.completed != true;
            });
    }
};

// state是怎么转换成props的
// 状态state的变化影响组件的属性
// mapStateToProps的第一个参数总是state对象，还可以使用第二个参数，代表容器组件的props对象
// 返回新的state，作为此组件的props
const mapStateToProps = function (state) {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
};

// 行为dispatch变化影响组件的属性
// dispatch是传入的，是分发器
// disptach对用户直接的行为onTodoClick进行分发，分发到actions/index.jsx的行为抽象toggleTodo()
const mapDispatchToProps = function (dispatch) {
    return {
        onTodoClick: function (id) {
            dispatch(toggleTodo(id));
        }
    }
};

// 明确此组件所有要接收到的变化
// 状态state的变化影响组件的属性
// 当有用户的行为需要分发dispatch的时候，影响组件的属性
const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;