/**
 * Created by sf on 2017/8/20.
 */

import AppDispatcher from '../dispatcher/index.jsx';

// 当按钮被单击时，一个特殊的action被触发，并且交给Dispatcher处理
// action没有什么神奇，只是一个普通的JS对象
// actionType表示这个action的用途，另一个字段是需要传递的值。
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
// dispatch是一个对象，但如果应用很复杂的时候，就可能在不同的view中dispatch相同的对象，而且必须有相同的actionType，还要记牢数据的格式，不利于代码的复用。
// 所以，Flux提出由action creator把数据抽象到一些函数中，比如示例中的TodoAction

export default TodoAction;
