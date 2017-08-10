/**
 * Created by Administrator on 2017/8/10 0010.
 */

import React from 'react';
import {render} from 'react-dom';

import ItemEditor from '../ItemEditor/index.jsx';
import ItemShowLayer from '../ItemShowLayer/index.jsx';
import List from '../List/index.jsx';
import ListItem from '../ListItem/index.jsx';


export default class App extends React.Component{
    render(){
        return(
            <div>
                <ItemEditor />
                <ItemShowLayer />
                <ListItem />
                <List />
            </div>
        )
    }
}
