/**
 * Created by Administrator on 2017/8/15 0015.
 */

import React from 'react';
import './index.less';

class ItemEditor extends React.Component {
    render() {
        return (
            <div className="col-md-8 item-editor-component">
                <div className="control-area">
                    <button className="btn btn-success">saveText}</button>
                    <button className="btn secondary">取消</button>
                </div>
                <div className="edit-area">
                    <input placeholder="请填写标题"/>
                    <textarea placeholder="请填写内容"/>
                </div>
            </div>
        );
    }
}

export default ItemEditor;

