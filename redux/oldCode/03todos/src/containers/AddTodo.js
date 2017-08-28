/**
 * Created by sf on 2017/7/20.
 */

import React from 'react';

class AddTodo extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <input type="text"/>
                    <button type="submit">Add Todo</button>
                </form>
            </div>
        )
    }
}

export default AddTodo;
