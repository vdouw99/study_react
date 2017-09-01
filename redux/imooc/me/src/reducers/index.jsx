/**
 * Created by Administrator on 2017/9/1 0001.
 */

const todos = (state = [], action)=> {
    switch (action.type) {
        case 'ADD_TODO':
            var newState = [];
            for (var i = 0; i < state.length; i++) {
                newState.push(state[i]);
            }
            newState.push({id: action.id, text: action.text, completed: false});
            return newState;
        case 'TOGGLE_TODO':
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