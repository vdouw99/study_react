/**
 * Created by sf on 2017/8/20.
 */

import AppDispatcher from '../dispatcher/index.jsx';

const TodoAction = {
    create(todo) {
        AppDispatcher.dispatch({
            actionType: 'CREATE_TODO',
            todo
        });
    },
    delete(id) {
        AppDispatcher.dispatch({
            actionType: 'DELETE_TODO',
            id
        });
    }
};

export default TodoAction;
