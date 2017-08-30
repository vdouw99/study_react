/**
 * Created by sf on 2017/8/29.
 * 此文件acions/index.jsx定义用户的行为（抽象）
 */

let nextTodoId = 0;

// 添加待办事项
// 定义action creator
export const addTodo = (text) => {
    // 定义action内容的格式
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text: text
    }
};

// 删除待办事项
export const setVisibility = function (filter) {
    return {
        type: 'SET_VISIBILITY',
        filter: filter
    }
};

// export const setVisibility = (filter) => {
//     return {
//         type: 'SET_VISIBILITY',
//         filter: filter
//     }
// };

// 切换待办事项
export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id: id
    }
};



