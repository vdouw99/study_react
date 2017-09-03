/**
 * Created by Administrator on 2017/8/15 0015.
 */

import React from 'react';

function CreateBar({onClick111}) {
    return (
        <a href="javascript:;" onClick={onClick111} className="list-group-item create-bar-component">
            + 创建新的文章
        </a>
    );
}

export default CreateBar;