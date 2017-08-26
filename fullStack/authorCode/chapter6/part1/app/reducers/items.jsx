/*
 * @file reducers for items
 */

import {UPDATE_ENTRY_LIST} from '../actions/index.jsx';

const initialState = [];

export default function items(state = initialState, action) {
    switch (action.type) {
        case UPDATE_ENTRY_LIST:
            return action.items;
        default:
            return state;
    }
}
