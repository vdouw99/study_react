/**
 * Created by Administrator on 2017/8/14 0014.
 */

import React from 'react';
import './index.less';

import CreateBar from '../CreateBar/index.jsx';
import ItemEditor from '../ItemEditor/index.jsx';

class Deskmark extends React.Component {
    render() {
        return (
            <section className="deskmark-component">
                <nav className="container-fuild">
                    <div className="text-center bg-danger">Nav</div>
                </nav>
                <div className="container-fluid">
                    <div className="col-md-6 bg-success">
                        <CreateBar />
                    </div>
                    <div className="col-md-6 bg-info">
                        <ItemEditor />
                    </div>
                </div>
            </section>
        );
    }
}

export default Deskmark;
