/**
 * Created by sf on 2017/7/20.
 */

import React from 'react';

import Footer from './Footer.js';
import AddTodo from '../containers/AddTodo.js';

class App extends React.Component {
    render() {
        return (
            <div>
                <p>App-03todos</p>
                <AddTodo />
                <Footer />
            </div>
        )
    }
}

export default App;

