/**
 * Created by Administrator on 2017/8/25 0025.
 */

import React from 'react';
import './index.less';

class Index extends React.Component {
    render() {
        const {onSaveFromItemeditor, onCancelFromItemeditor} = this.props;
        const item = this.props.item || {title: '', content: ''}; //新增和编辑公用一个模板，所以这个判断一定要加上，不然模板找不到对象中的变量
        let saveText = item.id ? '保存' : '创建';
        let save = ()=> {
            onSaveFromItemeditor({
                title: this.refs.title.value,
                content: this.refs.content.value
            });
            this.refs.title.value = this.refs.content.value = '';
        };
        return (
            <div className="col-md-8 item-editor-component">
                <div className="edit-area">
                    <input ref="title" type="text" placeholder="请填写标题" defaultValue={item.title}/>
                    <textarea ref="content" placeholder="请填写内容" defaultValue={item.content}/>
                </div>
                <div className="control-area">
                    <button onClick={save} className="btn btn-success">{saveText}</button>
                    <button onClick={onCancelFromItemeditor} className="btn btn-secondary">取消</button>
                </div>
            </div>
        );
    }
}

export default Index;
