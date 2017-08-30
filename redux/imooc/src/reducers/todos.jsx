/**
 * Created by sf on 2017/8/29.
 */

// reducer
// 传入旧状态和action
// 返回新状态

// 每条事项的响应
const todo = (state, action)=> {
    switch (action.type) {
        // 根据传入的action和旧state，输出新的state
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state;
            }
            return Object.assign({}, state, {
                completed: !state.completed
            });
        default:
            return state;
    }
};

// 全部事项的响应
const todos = (state = [], action)=> {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];
        case 'TOGGLE_TODO':
            return state.map(t => todo(t, action));
        default:
            return state;
    }
};

export default todos;


