/**
 * Created by Administrator on 2017/8/14 0014.
 */

import React from 'react';
import uuid from 'uuid';
import './index.less';

import CreateBar from '../CreateBar/index.jsx';
import ItemEditor from '../ItemEditor/index.jsx';
import List from '../List/index.jsx';

class Deskmark extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            selectedId: null,
            editing: false
        }
    }

    saveItem(item) {
        let items = this.state.items;
        // if (!item.id) {
        //     items = [...items, {
        //         item: item,
        //         id: uuid.v4(),
        //         time: new Date().getTime()
        //     }];
        // } else {
        //     items = items.map(
        //         exist=>(exist.id === item.id ? {
        //             exist: exist,
        //             item: item
        //         } : exist)
        //     );
        // }
        this.setState({
            items: items,
            selectedId: uuid.v4(),
            editing: false
        })
    }

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
        console.log(items);
        // const selected = select
        return (
            <section className="deskmark-component">
                <nav className="container-fuild">
                    <div className="text-center bg-danger">Nav</div>
                </nav>
                <div className="container-fluid">
                    <div className="col-md-6 bg-success">
                        <CreateBar />
                        <hr />
                        <List items={items}/>
                    </div>
                    <div className="col-md-6 bg-info">
                        {/*<ItemEditor item={selected} onSave={this.saveItem.bind(this)}/>*/}

                    </div>
                </div>
            </section>
        );
    }
}

export default Deskmark;
