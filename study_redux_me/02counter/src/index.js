/**
 * Created by sf on 2017/7/18.
 */

// import React from 'react';
// import {createStore} from 'redux';
// const render1 = () => ReactDOM.render(
//     <div>123</div>,
//     document.getElementById('root')
// );
// render1();

// 上面这种写法也可以，只是我看不懂而已

import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import ReactDOM from 'react-dom';

import Counter from './components/Counter.js';
import counter from './reducers/index.js';

const store = createStore(counter);

const render1 = () => ReactDOM.render(
    <div>
        <Counter
            value={store.getState()}
            onIncrement={()=>store.dispatch({type:'INCREMENT'})}
            onDecrement={()=>store.dispatch({type:'DECREMENT'})}
        />
    </div>,
    document.getElementById('root')
);

render1();
store.subscribe(render1);