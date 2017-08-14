/**
 * Created by Administrator on 2017/8/10 0010.
 */

import React from 'react';
import {render} from 'react-dom';
import './index.less';

function CreateBar({onClick}) {
    return (
        <a href="#" onClick={onClick} className="list-group-item create-bar-component">
            + 创建新的文章
        </a>
    )
}

export default CreateBar;