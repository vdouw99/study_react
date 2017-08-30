/**
 * Created by Administrator on 2017/8/30 0030.
 */

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            // return [...state, {id: action.id, text: action.text, completed: false}];
            // 以下为ES5的解决方法
            var newSt = [];     // 你是在原state上改动的吧
            for (var i = 0; i < state.length; i++) {
                newSt.push(state[i]);
            }
            newSt.push({id: action.id, text: action.text, completed: false});
            return newSt;
        case 'TOGGLE_TODO':
            // ES6的方法报错，有时间再来纠错吧
            // return state.map(todo =>(todo.id === action.id) ? {...todo, completed: !todo.completed} : todo);
            // 以下为ES5的解决方法
            var newState = [];
            for (var i = 0; i < state.length; i++) {
                newState.push(state[i]);
                if (newState[i]['id'] == action.id) {
                    newState[i]['completed'] = !newState[i]['completed'];
                }
            }
            return newState;
        default:
            return state;
    }
};

export default todos;


// 以下为老师的解决方法
// const todos = (state = [], action) => {
//     switch (action.type) {
//         case "ADD_TODO":
//             return [...state, todo(undefined, action)];
//         case "TOGGLE_TODO":
//             return state.map(t => todo(t, action));
//         default:
//             return state;
//     }
// };
// const todo = (state, action) => {
//     switch (action.type) {
//         case "ADD_TODO":
//             return {id: action.id, text: action.text, completed: false};
//         case "TOGGLE_TODO":
//             if (state.id !== action.id) {
//                 return state;
//             } else {
//                 return Object.assign({}, state, {completed: !state.completed});
//             }
//         default:
//             return state;
//     }
// };
// export default todos;
