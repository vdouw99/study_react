/**
 * Created by Administrator on 2017/8/10 0010.
 */

import React from 'react';
import {render} from 'react-dom';
import './index.less';

import CreateBar from '../CreateBar/index.jsx';

import ItemEditor from '../ItemEditor/index.jsx';
import ItemShowLayer from '../ItemShowLayer/index.jsx';
import List from '../List/index.jsx';
import ListItem from '../ListItem/index.jsx';


export default class App extends React.Component {
    render() {
        return (
            <section className="deskmark-component">
                <nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
                    <a className="navbar-brand" href="#">Deskmark App</a>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 list-group">
                            <CreateBar />
                            <list />
                        </div>
                        <ItemEditor />
                    </div>
                </div>
            </section>
        )
    }
}
