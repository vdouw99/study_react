/**
 * Created by Administrator on 2017/8/15 0015.
 */

import React from 'react';
import './index.less';

import CreateBar from '../CreateBar/index.jsx';
import List from '../List/index.jsx';

class Index extends React.Component {
    render() {
        return (
            <section className="deskmark-component">
                <nav className="container-fuild">
                    <div className="text-center bg-danger">Nav</div>
                </nav>
                <div className="container-fluid">
                    <div className="col-md-6 bg-success">
                        <CreateBar />
                        <hr />
                        <List />
                    </div>
                    <div className="col-md-6 bg-info">
                        right
                    </div>
                </div>
            </section>
        );
    }
}

export default Index;
