/**
 * Created by Administrator on 2017/8/10 0010.
 */

import React, {PropTypes} from 'react';
import {render} from 'react-dom';
import './index.less';

const propTypes = {
    item: PropTypes.object,
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
};

class ItemEditor extends React.Component {
    render() {
        const {onSave, onCancel} = this.props;
        const item = this.props.item || {
                title: "",
                content: ""
            };
        let saveText = item.id ? '保存' : '创建';
        let save = ()=> {
            // alert('save方法');
            onSave({
                // ...item,
                title: this.refs.title.value,
                content: this.refs.content.value
            });
        };
        return (
            <div className="col-md-8 item-editor-component">
                <div className="control-area">
                    <button onClick={save} className="btn btn-success">{saveText}</button>
                    <button onClick={onCancel} className="btn secondary">取消</button>
                </div>
                <div className="edit-area">
                    <input ref="title" placeholder="请填写标题" defaultValue="item.title"/>
                    <textarea ref="content" placeholder="请填写内容" defaultValue="item.content"/>
                </div>
            </div>
        );
    }
}

ItemEditor.propTypes = propTypes;

export default ItemEditor;