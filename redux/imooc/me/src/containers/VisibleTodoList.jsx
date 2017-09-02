/**
 * Created by sf on 2017/9/2.
 */

import React from 'react';
import {connect} from 'react-redux';

import TodoList from '../components/TodoList.jsx';

const VisibleTodoList = connect()(TodoList);

export default VisibleTodoList;

