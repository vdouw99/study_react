/**
 * Created by Administrator on 2017/8/25 0025.
 */

import React from 'react';
import './index.less';

class Index extends React.Component {
    render() {
        const {onSave} = this.props;
        let save = ()=> {
            onSave({
                title: this.refs.title.value,
                content: this.refs.content.value
            });
            this.refs.title.value = this.refs.content.value = '';
        };
        return (
            <div className="col-md-8 item-editor-component">
                <div className="edit-area">
                    <input ref="title" type="text" placeholder="请填写标题"/>
                    <textarea ref="content" placeholder="请填写内容"/>
                </div>
                <div className="control-area">
                    <button onClick={save} className="btn btn-success">创建</button>
                    <button className="btn btn-secondary">取消</button>
                </div>
            </div>
        );
    }
}

export default Index;
