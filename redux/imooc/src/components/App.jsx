/**
 * Created by sf on 2017/8/29.
 */

import React from 'react';
import AddTodo from "../containers/AddTodo.jsx";
import VisibleTodoList from "../containers/VisibleTodoList.jsx";
import Footer from './Footer.jsx';

const App = () =>(
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
);

export default App;


