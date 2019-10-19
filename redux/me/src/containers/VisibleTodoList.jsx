/**
 * Created by sf on 2017/9/2.
 */

import React from 'react';
import {connect} from 'react-redux';

import {toggleTodo} from '../actions/index.jsx';
import TodoList from '../components/TodoList.jsx';

const getVisibleTodos = (todos, filter)=> {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(function (t) {
                return t.completed == true;
            });
        case 'SHOW_ACTIVE':
            return todos.filter(function (t) {
                return t.completed != true;
            });
        default:
            return todos;
    }
};

const mapStateToProps = function (state) {
    console.log('----VisibleTodoList.jsx----');
    console.log(state);
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
};

const mapDispatchToProps = function (dispatch) {
    return {
        onTodoClick: function (id) {
            dispatch(toggleTodo(id));
        }
    }
};

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;

