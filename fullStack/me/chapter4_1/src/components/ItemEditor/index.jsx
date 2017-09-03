/**
 * Created by Administrator on 2017/8/10 0010.
 */

import React, {PropTypes} from 'react';
import './index.less';

const propTypes = {
    item: PropTypes.object,
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
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
            onSave({
                // ...item,     // 报错
                item: item,  // 暂这样不报错
                title: this.refs.title.value,
                content: this.refs.content.value
            });
            console.log('---onSave----');
            console.log(onSave);
        };
        return (
            <div className="col-md-6 item-editor-component">
                <div className="control-area">
                    <button onClick={save} className="btn btn-success">{saveText}</button>
                    <button onClick={onCancel} className="btn secondary">取消</button>
                </div>
                <div className="edit-area">
                    <input ref="title" placeholder="请填写标题" defaultValue={item.title}/>
                    <textarea ref="content" placeholder="请填写内容" defaultValue={item.content}/>
                </div>
            </div>
        );
    }
}

ItemEditor.propTypes = propTypes;

export default ItemEditor;