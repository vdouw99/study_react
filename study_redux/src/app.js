/**
 * Created by sf on 2017/7/14.
 */

import React from 'react';
import {render} from 'react-dom';
import Redux01 from './Redux01.jsx';

import {createStore} from 'redux';

// const store = createStore(fn);

const ADD_TODO = '添加Todo';
function addTodo(text) {
    return {
        type: ADD_TODO,
        text: text
    }
}

const action = addTodo('learn Redux');
document.write(JSON.stringify(action));

class App extends React.Component {
    render() {
        return (
            <div>
                <Redux01 />
            </div>
        )
    }
}

export default App;