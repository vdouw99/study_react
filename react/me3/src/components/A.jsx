/**
 * Created by sf on 2017/9/4.
 */

import React from 'react'

class A extends React.Component {
    render() {
        return (
            <p>{this.props.userinfo.userid}</p>
        )
    }
}

export default A;