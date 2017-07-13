/**
 * Created by sf on 2017/7/5.
 */

import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import App from '../containers/App.jsx';
import Home from '../containers/Home/index.jsx';
import List from '../containers/List/index.jsx';
import NotFound from '../containers/NotFound/index.jsx';

class RouterMap extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">App</Link></li>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/list">List</Link></li>
                        <li><Link to="/notFound">NotFound</Link></li>
                    </ul>
                    <div style={{clear: 'both'}}></div>
                    <Switch>
                        <Route exact path="/" component={App}/>
                        <Route path="/home" component={Home}/>
                        <Route path="/list" component={List}/>
                        <Route path="*" component={NotFound}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

// class RouteMap extends React.Component {
//     render() {
//         return (
//             <Router path="/" component={App}>
//                 <Route path="home" component={Home}/>
//                 <Route path="list" component={List}/>
//             </Router>
//         )
//     }
// }

// class RouteMap extends React.Component {
//     render() {
//         return (
//             <Router onUpdate={this.updateHandle.bind(this)}>
//                 <div>
//                     <ul>
//                         <li><Link to="/">App</Link></li>
//                         <li><Link to="/home">Home</Link></li>
//                         <li><Link to="/list">List</Link></li>
//                     </ul>
//                     <div style={{clear: 'both'}}></div>
//                     <Route exact path="/" component={App}/>
//                     <Route path="/home" component={Home}/>
//                     <Route path="/list" component={List}/>
//                 </div>
//             </Router>
//         )
//     }
//
//     updateHandle() {
//         console.log('每次router变化后触发，可以做PV统计等');
//     }
// }

// class RouteMap extends React.Component {
//     render() {
//         return (
//             <div>
//                 <ul>
//                     <li><Link to="/">App</Link></li>
//                     <li><Link to="/home">Home</Link></li>
//                     <li><Link to="/list">List</Link></li>
//                 </ul>
//                 <div style={{clear:'both'}}></div>
//                 <Router history={this.props.history}>
//                     <Route path="/" component={App}>
//                         <IndexRoute component={Home}/>
//                         <Route path="list" component={List}/>
//                     </Route>
//                 </Router>
//             </div>
//         )
//     }
// }

export default RouterMap;
