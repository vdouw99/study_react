/**
 * Created by Administrator on 2017/8/25 0025.
 */

import React from 'react';
import uuid from 'uuid';
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
            selectedId: null,
            editing: false,
            titleValue: null,
            contentValue: null
        };
    }

    // 删除文章
    deleteItem(id) {
        this.setState({
            items: this.state.items.filter(res=>res.id != id)
        });
    }

    // 取消创建、取消编辑
    cancelEdit() {
        this.setState({editing: false});
        var _this = this;
        setTimeout(function () {
            console.log(JSON.stringify(_this.state));
        }, 0);
    }

    // 点击“编辑”按钮
    editItem(id) {
        this.setState({selectedId: id, editing: true});
        var _this = this;
        setTimeout(function () {
            console.log('-----当前选择的文章ID是：' + id);
            console.log(JSON.stringify(_this.state));
        }, 0);
    }

    // 点击“创建新文章”按钮
    createItem() {
        console.log('点击“创建新文章”按钮');
        this.setState({
            selectedId: null,
            editing: true,
            titleValue: null,
            contentValue: null
        });
    }

    // 选中某一篇文章
    selectItem(id) {
        if (id === this.state.selectedId) return;
        this.setState({selectedId: id, editing: false});
        var _this = this;
        setTimeout(function () {
            console.log('-----当前选择的文章ID是：' + id);
            console.log(JSON.stringify(_this.state));
        }, 0);
    }

    // 添加新文章
    saveItem(item) {
        console.log(item);
        if (this.state.selectedId) {
            
        } else {
            let items = this.state.items;
            console.log(this.state);
            item['time'] = new Date().getTime();
            item['id'] = uuid.v4();
            items = [...items, item];
            this.setState({items: items}); //通过setState方法更新state
            console.log(this.state);
        }
    }

    render() {
        const {items, selectedId, editing} = this.state;
        const selected = selectedId && items.find(item=>item.id === selectedId);
        // 普通写法，效果等同于上面这一行
        // for (var i = 0; i < items.length; i++) {
        //     if (items[i]['id'] == selectedId) {
        //         var selected = items[i];
        //     }
        // }
        console.log('------ItemShowLayer当前选中的文章（开始）：---------');
        console.log(selected);
        console.log('------ItemShowLayer当前选中的文章（结束）：---------');
        const mainPart = editing ? (
            <ItemEditor item={selected}
                        onCancelFromItemeditor={this.cancelEdit.bind(this)}
                        onSaveFromItemeditor={this.saveItem.bind(this)}/>
        ) : (
            <ItemShowLayer item={selected}
                           onDeleteFromItemshowlayer={this.deleteItem.bind(this)}
                           onEditFromItemshowlayer={this.editItem.bind(this)}/>
        );
        return (
            <section className="deskmark-component">
                <nav className="container-fuild">
                    <div className="text-center bg-danger">Nav</div>
                </nav>
                <div className="container-fuild bg-success">
                    <div className="col-md-6">
                        <CreateBar onClickFromCreatebar={this.createItem.bind(this)}/>
                        <List
                            onSelectFromListToDeskmark={this.selectItem.bind(this)}
                            items={this.state.items}/>
                    </div>
                    <div className="col-md-6">{mainPart}</div>
                </div>
            </section>
        );
    }
}

export default Index;
