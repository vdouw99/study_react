/**
 * Created by Administrator on 2017/8/15 0015.
 */

import React from 'react';
import './index.less';

class ItemEditor extends React.Component {
    render() {
        const {onSave} = this.props;
        const item = this.props.item || {title: "", content: ""};
        let save = ()=> {
            onSave({
                item: item,
                title: this.refs.title.value,
                content: this.refs.content.value
            });
        };
        return (
            <div className="col-md-8 item-editor-component">
                <div className="edit-area">
                    <input ref="title" placeholder="请填写标题"/>
                    <textarea ref="content" placeholder="请填写内容"/>
                </div>
                <div className="control-area">
                    <button onClick={save} className="btn btn-success">saveText}</button>
                    <button className="btn secondary">取消</button>
                </div>
            </div>
        );
    }
}

export default ItemEditor;

