/**
 * Created by sf on 2017/7/4.
 */

import React from 'react';
import {render} from 'react-dom';

import Input from '../../components/Input/index.jsx';
import List from '../../components/List/index.jsx';

class Todo extends React.Component {
    render() {
        return (
            <div>
                <Input />
                <List />
            </div>
        )
    }
}

export default Todo;
