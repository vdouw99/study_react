# Redux 思路

5.2 Redux
    Redux是JS的状态容器，提供可预测的状态管理。

5.2.1 动机
    状态是整个应用在运行的过程中，需要各种各样的动态数据，为便于管理，改变一个model时可能会引起其他无法预料的副作用。
    Redux就是让state的变化可以预测的工具。

5.2.2 三大定律
    1、单一数据源
        store对象用来存储整个state
    2、state只读
        不能在state上直接修改数据，改变state的唯一方法是触发action
        // 使用dispatch触发store的改变
        store.dispatch({
            type:'CREATE_POST',
            post:{id:2,content:'hello world'}
        });
        // 使用getState方法返回当前的state
        stor.getState();
    3、使用纯函数执行修改
        为了描述action怎样改变state，需要编写reducer来支付宝修改的规则
        reducer是纯函数，接收先前的state和处理的action，返回新的state。
        // 这是一个reducer，处理action，并返回新的state
        function posts(state=[],action){
            switch(action.type){
                case 'CREATE_POST':
                    return [...state,action.post]
                default:
                    return state;
            }
        }

5.2.3 实例剖析
    1、action
        action是信息的载体，















