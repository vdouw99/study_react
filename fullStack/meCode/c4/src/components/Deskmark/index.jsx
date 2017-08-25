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
                {id: 'id1', title: 'title1', content: 'content1&nbsp;', time: '1503634041777'},
                {id: 'id2', title: 'title2', content: 'content2&nbsp;', time: '1503635041777'}
            ],
            selectedId: null
        };
    }

    // 选中某一篇文章
    selectItem(id) {
        if (id === this.state.selectedId) return;
        this.setState({selectedId: id});
        var _this = this;
        setTimeout(function () {
            console.log('-----当前选择的文章ID是：' + id);
            console.log(JSON.stringify(_this.state));
        }, 0);
    }

    // 添加新文章
    saveItem(item) {
        console.log(item);
        let items = this.state.items;
        item['time'] = new Date().getTime();
        items = [...items, item];
        this.setState({items: items}); //通过setState方法更新state
        console.log(this.state);
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
                        <List onSelectFromListToDeskmark={this.selectItem.bind(this)} items={this.state.items}/>
                    </div>
                    <div className="col-md-6">
                        <ItemEditor onSave={this.saveItem.bind(this)}/>
                        <ItemShowLayer />
                    </div>
                </div>
            </section>
        )
    }
}

export default Index;
