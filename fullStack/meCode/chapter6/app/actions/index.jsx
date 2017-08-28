/**
 * Created by Administrator on 2017/8/28 0028.
 */

// 将storage.jsx的属性和方法全部引入，并将其命名为storage
import * as storage from '../utils/storage.jsx';

// 定义action分3步
// 定义action第1步：定义类型
// 定义类型为常量，相比于字符串字面量，便于发现低级错误
export const SELECT_ENTRY = 'SELECT_ENTRY';
export const CREATE_NEW_ENTRY = 'CREATE_NEW_ENTRY';
export const EDIT_ENTRY = 'EDIT_ENTRY';
export const CANCEL_EDIT = 'CANCEL_EDIT';

// 定义action第3步：定义action creator
export function selectEntry(id) {
    // 定义action第2步：定义内容的格式
    return {type: SELECT_ENTRY, id: id};
}
export function createNewEntry() {
    return {type: CREATE_NEW_ENTRY};
}
export function editEntry(id) {
    return {type: EDIT_ENTRY, id: id};
}
export function cancelEdit() {
    return {type: CANCEL_EDIT};
}

// 定义middleware redux-thunk
export const UPDATE_ENTRY_LIST = 'UPDATE_ENTRY_LIST';
function updateEntryList(items) {
    return {type: UPDATE_ENTRY_LIST, items: items};
}

export function deleteEntry(id) {
    return dispatch=> {
        storage.deleteEntry(id)
            .then(()=>storage.getAll())
            .then((items)=>dispatch(updateEntryList(items)));
    }
}

export function fetchEntryList() {
    return dispatch=> {
        storage.getAll().then(items=>dispatch(updateEntryList(items)));
    }
}

export const UPDATE_SAVED_ENTRY = 'UPDATE_SAVED_ENTRY';
function updateSaveEntry(id) {
    return {type: UPDATE_SAVED_ENTRY, id: id};
}

export function saveEntry(item) {
    const {title, content, id} = item;
    return dispatch=> {
        if (id) {
            storage.updateEntry(id, title, content)
                .then(()=>dispatch(updateSaveEntry(id)))
                .then(()=>storage.getAll())
                .then(items=>dispatch(updateEntryList(items)));
        } else {
            storage.insertEntry(title, content)
                .then(inserted=>dispatch(updateSaveEntry(inserted.id)))
                .then(()=>storage.getAll())
                .then(items=>dispatch(updateEntryList(items)));
        }
    }
}

