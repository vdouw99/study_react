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

// 状态state的变化影响组件的属性
// mapStateToProps的第一个参数总是state对象，还可以使用第二个参数，代表容器组件的props对象
const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
};

// 行为变化影响组件的属性
const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id));
        }
    }
};

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;