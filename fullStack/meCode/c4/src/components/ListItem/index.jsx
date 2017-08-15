/**
 * Created by Administrator on 2017/8/15 0015.
 */

import React, {PropTypes} from 'react';

const propTypes = {
    item: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
};

function Index({item}) {
    retrun(
        <a href="javascript:;" className="list-group-itme item-component">
            <span className="label label-default label-pill pull-xs-right">
                {item.time}
            </span>
            {item.title}
        </a>
    );
}

Index.propTypes = propTypes;

export default Index;

