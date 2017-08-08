/**
 * Created by Administrator on 2017/8/8 0008.
 */

import React, {PropTypes} from 'react';
import {render} from 'react-dom';

const propTypes = {
    hobby: PropTypes.string.isRequired
};

class Hobby extends React.Component {
    render() {
        return (
            <li>
                {this.props.hobby}
            </li>
        )
    }
}

Hobby.propTypes = propTypes;

export default Hobby;