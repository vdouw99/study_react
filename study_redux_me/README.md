redux教程
http://cn.redux.js.org/docs/introduction/Examples.html
redux官方示例
https://github.com/reactjs/redux.git

一、store
Store是保存数据的地方，可以当作一个容器。整个应用只能有一个store。
Redux提供createStore函数，用来生成store。

import {createStore} from 'redux';
const store = createStore(fn);

createStore函数接受另一个函数作为参数，返回新生成的store对象。


二、state
store对象包含所有数据，如果想得到某个时点的数据，就要对store生成快照，这个时点的数据集合，就是state。
当前时刻的state，可以通过store.getState()得到。

const state = store.getState();

Redux规定，一个state对应一个view。只要state相同，view就相同，反之亦然。


三、action
state的变化，会导致view的变化。但是，用户接触不到state，所以，state的变化必须是由view导致的。
action就是view发出的通知，表示state应该发生变化了。
action是一个对象，其中的type属性是必须的，表示action的名称。
action描述当前发生的事情，改变state的唯一方法，就是使用action。


四、action creator
view要发送多少种消息，就会有多少种action。
手写太麻烦，所以我们有必要定一个函数来生成action，这个函数就是action creator。


五、store.dispatch()
是view发出action的唯一方法


六、Reducer
store收到action后，必须给出一个新的state，这样view才会发生变化。这种state的计算过程，就是reducer。


七、store.subscribe()
一旦state发生变化，就自动执行stor.subscribe()函数。
所以，只要把view的更新函数入也listen，就会实现view的自动渲染。
对于react，就是render()方法或setState()方法。



解析 02counter 代码
