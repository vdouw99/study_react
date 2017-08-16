/**
 * Created by Administrator on 2017/8/15 0015.
 */

import React from 'react';
import './index.less';

import CreateBar from '../CreateBar/index.jsx';
import List from '../List/index.jsx';
import ItemEditor from '../ItemEditor/index.jsx';
import ItemShowLayer from '../ItemShowLayer/index.jsx';

class Deskmark extends React.Component {
    render() {
        const items = [
            {
                id: 'id1',
                title: 'title1',
                content: 'content',
                time: 1458030208359
            },
            {
                id: 'id2',
                title: 'title2',
                content: 'content2',
                time: 1458030408359
            }
        ];
        return (
            <section className="deskmark-component">
                <nav className="container-fuild">
                    <div className="text-center bg-danger">Nav</div>
                </nav>
                <div className="container-fluid bg-success">
                    <div className="col-md-6">
                        <CreateBar />
                        <hr />
                        <List items={items}/>
                    </div>
                    <div className="col-md-6">
                        <ItemEditor />
                        <div className="clearfix"></div>
                        <ItemShowLayer />
                    </div>
                </div>
            </section>
        );
    }
}

export default Deskmark;
