/**
 * Created by Administrator on 2017/8/25 0025.
 */

import React from 'react';
import List from '../List/index.jsx';
import CreateBar from '../CreateBar/index.jsx';
import ItemEditor from '../ItemEditor/index.jsx';
import ItemShowLayer from '../ItemShowLayer/index.jsx';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {id: 'id1', title: 'title1', content: 'content1&nbsp;', time: '2016-12-12 12:13:14'},
                {id: 'id2', title: 'title2', content: 'content2&nbsp;', time: '2016-12-13 12:13:14'}
            ]
        };
    }

    render() {
        return (
            <section className="deskmark-component">
                <nav className="container-fuild">
                    <div className="text-center bg-danger">Nav</div>
                </nav>
                <div className="container-fuild bg-success">
                    <div className="col-md-6">
                        <CreateBar />
                        <List items={this.state.items}/>
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
