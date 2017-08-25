/**
 * Created by Administrator on 2017/8/25 0025.
 */

import React from 'react';
import List from '../List/index.jsx';
import CreateBar from '../CreateBar/index.jsx';
import ItemEditor from '../ItemEditor/index.jsx';
import ItemShowLayer from '../ItemShowLayer/index.jsx';

class Index extends React.Component {
    render() {
        return (
            <section className="deskmark-component">
                <nav className="container-fuild">
                    <div className="text-center bg-danger">Nav</div>
                </nav>
                <div className="container-fuild bg-success">
                    <div className="col-md-6">
                        <CreateBar />
                        <List />
                    </div>
                    <div className="col-md-6">
                        <ItemEditor />
                        <ItemShowLayer />
                    </div>
                </div>
            </section>
        )
    }
}

export default Index;
