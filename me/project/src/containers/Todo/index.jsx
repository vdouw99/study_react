/**
 * Created by sf on 2017/7/4.
 */

import React from 'react';
import {render} from 'react-dom';

import Input from '../../components/Input/index.jsx';
import List from '../../components/List/index.jsx';

class Todo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            todos: []
        }
    }

    render() {
        return (
            <div>
                <Input fnByInputModule={this.submitFn.bind(this)}/>
                <List todos={this.state.todos} />
            </div>
        )
    }

    submitFn(value) {
        const id = this.state.todos.length;
        this.setState({
            todos: this.state.todos.concat({
                id: id,
                text: value
            })
        });
        console.log(this.state.todos);
    }
}

export default Todo;
