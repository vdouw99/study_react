/**
 * Created by sf on 2017/8/20.
 */

import React from 'react';
import List from './List';
import CreateButton from './CreateButton';
import TodoStore from '../stores/index.jsx';
import TodoAction from '../actions/index.jsx';
import uuid from 'uuid';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        // store的变化已经使用emit方法广播出去，那么view层现在要做的就是接收这个变化的信号，同时更新UI。
        // 首先，要在组件刚初始化完毕的时候监听store的change事件，这样在store触发这个事件的时候，就会触发回调。
        // 那么，我们回到最早的Todo.jsx组件中，在它的生命周期函数中加上这些事件监听。
        this.state = {
            todos: TodoStore.getAll()
        };
        this.createTodo = this.createTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    // 初始化的时候，在store中注册这个事件
    componentDidMount() {
        TodoStore.addChangeListener(this.onChange);
    }

    // 组件卸载的时候，记得清除这个事件绑定
    componentWillUnmount() {
        TodoStore.removeChangeListener(this.onChange);
    }

    // store改变后触发的回调，用setState来更新整个UI
    onChange() {
        this.setState({
            todos: TodoStore.getAll()
        });
    }

    // 创建Todo的事件回调
    createTodo() {
        TodoAction.create({id: uuid.v4(), content: '3rd stuff'});
    }

    // 删除Todo
    deleteTodo(id) {
        TodoAction.delete(id);
    }

    // 当用户在view上有一个交互时，Dispatcher广播一个action，在整个程序的总调度台（Dispatcher）里面注册了各种类型的action类型，在对应的类型中，store实现了订阅->发布的功能，对这个action进行响应，对数据做相应的处理，然后触发一个自定义事件，财时，在view上注册这个store的事件回调，响应这个事件并且重新渲染界面。

    render() {
        return (
            <div>
                <List items={this.state.todos} onDelete={this.deleteTodo}/>
                <CreateButton onClick={this.createTodo}/>
            </div>
        );
    }
}

export default Todo;

