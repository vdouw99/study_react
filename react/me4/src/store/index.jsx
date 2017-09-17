/**
 * Created by Administrator on 2017/9/12 0012.
 */

import {createStore} from 'redux';

import rootReducer from '../reducers/index.jsx';

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store;
}