/**
 * Created by Administrator on 2017/9/5 0005.
 */

import React from 'react';
import{Router,Route,IndexRoute} from 'react-router';

import App from '../containers/index.jsx';
import Home from '../containers/Home/index.jsx';
import List from '../containers/List/index.jsx';
import Detail from '../containers/Detail/index.jsx';
import NotFound from '../containers/NotFound/index.jsx';

class CCC extends React.Component{
    render(){
        return(
            <div>
                <App />
                <Home />
                <List />
                <Detail />
                <NotFound />
            </div>
        )
    }
}

export default CCC;
