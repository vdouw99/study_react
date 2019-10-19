/**
 * Created by Administrator on 2017/9/1 0001.
 */

let nextID = 1999;

export const addTodo = function (text) {
    return {
        type: 'ADD_TODO',
        id: nextID++,
        text: text
    };
};

export const setVisibility = function (filter) {
    return {
        type: 'SET_VISIBILITY',
        filter: filter
    };
};

export const toggleTodo = function (id) {
    return {
        type: 'TOGGLE_TODO',
        id: id
    };
};