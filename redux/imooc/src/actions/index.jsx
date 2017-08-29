/**
 * Created by sf on 2017/8/29.
 */

let nextTodoId = 0;

// 添加事项
export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text: text
    }
};

// 过滤
export const setVisibility = (filter)=> {
    return {
        type: 'SET_VISIBILITY',
        filter: filter
    }
};

// 切换事项
export const toggleTodo = (id)=> {
    return {
        type: 'TOGGLE_TODO',
        id: id
    }
};



