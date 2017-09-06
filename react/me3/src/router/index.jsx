/**
 * Created by Administrator on 2017/9/5 0005.
 */

import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';

import App from '../containers/App.jsx';
import Home from '../containers/Home/index.jsx';
import List from '../containers/List/index.jsx';
import Detail from '../containers/Detail/index.jsx';
import NotFound from '../containers/NotFound/index.jsx';

class Index extends React.Component {
    updateHandle() {
        console.log('每次路由变化触发');
    }

    render() {
        return (
            <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home}/>
                    <Route path='list' component={List}/>
                    <Route path='detail/:id' component={Detail}/>
                    <Route path="*" component={NotFound}/>
                </Route>
            </Router>
        )
    }
}

// import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
// import {hashHistory} from 'react-router';
//
// class Index extends React.Component {
//     render() {
//         return (
//             <Router>
//                 <div>
//                     <ul>
//                         <li><Link to="/">App</Link></li>
//                         <li><Link to="/home">Home</Link></li>
//                         <li><Link to="/list">List</Link></li>
//                         <li><Link to="/notFound">NotFound</Link></li>
//                     </ul>
//                     <div style={{clear: 'both'}}></div>
//                     <Switch>
//                         <Route exact path="/" component={App}/>
//                         <Route path="/home" component={Home}/>
//                         <Route path="/list" component={List}/>
//                         <Route path="*" component={NotFound}/>
//                     </Switch>
//                 </div>
//             </Router>
//         )
//     }
// }

export default Index;
