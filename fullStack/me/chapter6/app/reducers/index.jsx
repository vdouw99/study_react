/**
 * Created by Administrator on 2017/8/28 0028.
 */

import {combineReducers} from 'redux';
import items from './items.jsx';
import editor from './editor.jsx';

const rootReducer = combineReducers({
    items: items,
    editor: editor
});

export default rootReducer;