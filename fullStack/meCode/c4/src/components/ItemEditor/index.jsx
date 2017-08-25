/**
 * Created by Administrator on 2017/8/25 0025.
 */

import React from 'react';
import './index.less';

class Index extends React.Component {
    render() {
        return (
            <div className="col-md-8 item-editor-component">
                <div className="edit-area">
                    <input type="text" placeholder="请填写标题"/>
                    <textarea placeholder="请填写内容"></textarea>
                </div>
                <div className="control-area">
                    <button className="btn btn-success">创建</button>
                    <button className="btn btn-secondary">取消</button>
                </div>
            </div>
        );
    }
}

export default Index;
