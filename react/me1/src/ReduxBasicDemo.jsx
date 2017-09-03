/**
 * Created by sf on 2017/9/3.
 */

import {createStore} from 'redux';

export default function () {

    // 第一步：定义计算规则，即reducer
    function counter(state = 1999, action) {
        switch (action.type) {
            case 'INCREMENT':
                return state + 1;
            case 'DECREMENT':
                return state - 1;
            default:
                return state;
        }
    }

    // 第二步：根据计算规则生成store
    let store = createStore(counter);

    // 第三步：定义数据state变化之后的派发规则
    document.write('<hr>');
    store.subscribe(()=> {
        document.write('Fn1=>current state:', store.getState() + '<br><br>');
    });
    store.subscribe(()=> {
        document.write('Fn2=>current state:', store.getState() + '<br><br>');
    });

    // 第四步：触发数据变化
    store.dispatch({type: 'INCREMENT'});
    store.dispatch({type: 'INCREMENT'});
    store.dispatch({type: 'INCREMENT'});
    store.dispatch({type: 'DECREMENT'});
}