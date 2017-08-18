/**
 * Created by Administrator on 2017/8/15 0015.
 */

import React, {PropTypes} from 'react';
import './index.less';

const propTypes = {
    item: PropTypes.object,
    onSave: PropTypes.func.inRequired
};

class ItemEditor extends React.Component {
    render() {
        const {onSave, onCancel} = this.props;
        const item = this.props.item || {title: "", content: ""};
        let saveText = item.id ? '保存' : '创建';
        /* 有点问题--> */
        var save = ()=> {
            onSave({
                title: this.refs.title.value,
                content: this.refs.content.value
            });
            this.refs.title.value = this.refs.content.value = "";
            console.log(this.state);
        };
        /* <--有点问题 */
        return (
            <div className="col-md-8 item-editor-component">
                <div className="edit-area">
                    <input ref="title" defaultValue={item.title} placeholder="请填写标题"/>
                    <textarea ref="content" defaultValue={item.content} placeholder="请填写内容"/>
                </div>
                <div className="control-area">
                    <button onClick={save} className="btn btn-success">{saveText}</button>
                    <button onClick={onCancel} className="btn secondary">取消</button>
                </div>
            </div>
        );
    }
}

ItemEditor.propTypes = propTypes;

export default ItemEditor;

