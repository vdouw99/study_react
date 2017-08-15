/**
 * Created by Administrator on 2017/8/14 0014.
 */

import React, {PropTypes} from 'react';
import {render} from 'react-dom';
import './index.less';

const propTypes = {
    item: PropTypes.object,
    onSave: PropTypes.func.isRequired
};

class ItemEditor extends React.Component {
    render() {
        const {onSave} = this.props;
        // const onSave = this.props.onSave;    // 等同于这样
        const item = this.props.item || {title: '', content: ''};
        let save = ()=> {
            onSave({
                item: item,
                title: this.refs.title.value,
                content: this.refs.content.value
            });
            console.log('你输入的内容是：');
            console.log(item);
        };

        // 通过refs获取DOM节点
        // let save = ()=> {console.log(this.refs.title.value);};

        // ES5的方法 报错
        // function save(){console.log(this.refs.title.value);}

        return (
            <div className="col-md-6 item-editor-component">
                <div className="edit-area">
                    <p><input ref="title" placeholder="请填写标题"/></p>
                    <textarea ref="content" placeholder="请填写内容"/>
                </div>
                <div className="control-area">
                    <button onClick={save} className="btn btn-success">保存</button>
                    <button className="btn secondary ml-10">取消</button>
                </div>
            </div>
        )
    }
}

ItemEditor.propTypes = propTypes;

export default ItemEditor;