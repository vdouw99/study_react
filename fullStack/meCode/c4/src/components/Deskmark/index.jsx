/**
 * Created by Administrator on 2017/8/15 0015.
 */

import React from 'react';
import uuid from 'uuid';
import './index.less';

import CreateBar from '../CreateBar/index.jsx';
import List from '../List/index.jsx';
import ItemEditor from '../ItemEditor/index.jsx';
import ItemShowLayer from '../ItemShowLayer/index.jsx';

class Deskmark extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {id: 'id1', title: 'title1', content: 'content1', time: 1458030208359},
                {id: 'id2', title: 'title2', content: 'content2', time: 1458030408359}
            ],
            selectedId: null,    // 表示当前选择的内容
            editing: false       // 表示在编辑状态还是浏览状态
        };
        // this.selectItem = this.selectItem.bind(this);
        // this.saveItem = this.saveItem.bind(this);
        // this.deleteItem = this.deleteItem.bind(this);
        // this.createItem = this.createItem.bind(this);
        // this.editItem = this.editItem.bind(this);
        // this.cancelEdit = this.cancelEdit.bind(this);
    }

    createItem() {
        this.setState({
            selectedId: null,
            editing: true
        });
        console.log(this.state);
    }

    saveItem(item) {
        // item是编辑器返回的对象，里面应该包括标题和内容
        let items = this.state.items;
        item.id = uuid.v4();
        item.time = new Date().getTime();
        items = [...items, item];
        this.setState({
            items: items
        });
        console.log(this.state);
    }

    editItem(id) {
        this.setState({
            selectedId: id,
            editing: true
        });
    }

    render() {
        const {items, selectedId, editing} = this.state;
        const selected = selectedId && items.find(item=>item.id === selectedId);
        const mainPart = editing ? (
            <ItemEditor item={selected} onSave={this.saveItem.bind(this)}/>
        ) : (
            <ItemShowLayer item={selected} onEdit={this.editItem.bind(this)}/>
        );
        return (
            <section className="deskmark-component">
                <nav className="container-fuild">
                    <div className="text-center bg-danger">Nav</div>
                </nav>
                <div className="container-fluid bg-success">
                    <div className="col-md-6">
                        <CreateBar onClick111={this.createItem.bind(this)}/>
                        <hr />
                        <List items={this.state.items}/>
                    </div>
                    <div className="col-md-6">
                        {/*
                         <ItemEditor onSave={this.saveItem.bind(this)}/>
                         <div className="clearfix"></div>
                         <ItemShowLayer onEdit={this.editItem}/>
                         */}
                        {mainPart}
                    </div>
                </div>
            </section>
        );
    }
}

export default Deskmark;
