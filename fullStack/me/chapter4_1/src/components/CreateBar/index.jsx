/**
 * Created by Administrator on 2017/8/10 0010.
 */

import React, {PropTypes} from 'react';
import './index.less';

const propTypes = {
    onClick: PropTypes.func.isRequired
};

function CreateBar({onClick}) {
    return (
        <a href="javascript:;" onClick={onClick}
           className="list-group-item create-bar-component">
            + 创建新的文章
        </a>
    )
}

CreateBar.propTypes = propTypes;

export default CreateBar;