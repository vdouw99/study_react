/**
 * Created by sf on 2017/7/2.
 */

import React from 'react';
import {render} from 'react-dom';

class Header extends React.Component {
    render() {
        return (
            <h4>{this.props.title.a}</h4>
        )
    }
}

export default Header