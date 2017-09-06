/**
 * Created by Administrator on 2017/9/5 0005.
 */

import React from 'react';

class Index extends React.Component {
    render() {
        return (
            <div>
                Detail，URL参数：{this.props.params.id}
            </div>
        );
    }
}

export default Index;