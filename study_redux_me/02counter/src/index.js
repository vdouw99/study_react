/**
 * Created by zhangsanfeng on 2017/7/18.
 */

import React from 'react';
import {createStore} from 'redux';
import ReactDOM from 'react-dom';

import Counter from './components/Counter.js';
import reducer from './reducers.js';

const store = createStore(reducer);
// createStore函数接受另一个函数作为参数，返回新生成的Store对象

// const renderr = () => ReactDOM.render(
//     <div>
//         <Counter
//             value={store.getState()}
//             onIncrement={()=>store.dispatch({type:'INCREMENT'})}
//             onDecrement={()=>store.dispatch({type:'DECREMENT'})}
//         />
//     </div>,
//     document.getElementById('root')
// );

// 与如下的renderr的方法，是等同的效果

function renderr() {
    ReactDOM.render(
        <div>
            <Counter value={store.getState()}
                     onIncrement={function onIncrement(){return store.dispatch({type:'INCREMENT'})}}
                     onDecrement={function onDecrement(){return store.dispatch({type:'DECREMENT'})}}
            />
        </div>,
        document.getElementById('root')
    )
}

renderr();
store.subscribe(renderr);

