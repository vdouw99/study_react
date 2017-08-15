/**
 * Created by Administrator on 2017/8/14 0014.
 */

import React from 'react';

class ItemEditor extends React.Component {
    render() {
        return (
            <div className="col-md-6 item-editor-component">
                <div className="edit-area">
                    <p><input placeholder="请填写标题"/></p>
                    <textarea placeholder="请填写内容"/>
                </div>
                <div className="control-area">
                    <button className="btn btn-success">saveText</button>
                    <button className="btn secondary">取消</button>
                </div>
            </div>
        )
    }
}

export default ItemEditor;