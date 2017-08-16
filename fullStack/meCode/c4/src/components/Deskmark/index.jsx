/**
 * Created by Administrator on 2017/8/15 0015.
 */

import React from 'react';
import './index.less';

import CreateBar from '../CreateBar/index.jsx';
import List from '../List/index.jsx';

class Deskmark extends React.Component {
    render() {
        const items = [
            {
                id: 'id1',
                title: 'title1-hello',
                content: 'content',
                time: 1458030208359
            },
            {
                id: 'id2',
                title: 'title2-hello',
                content: 'content2',
                time: 1458030408359
            }
        ];
        return (
            <section className="deskmark-component">
                <nav className="container-fuild">
                    <div className="text-center bg-danger">Nav</div>
                </nav>
                <div className="container-fluid">
                    <div className="col-md-6 bg-success">
                        <CreateBar />
                        <hr />
                        <List items={items} />
                    </div>
                    <div className="col-md-6 bg-info">
                        right
                    </div>
                </div>
            </section>
        );
    }
}

export default Deskmark;
