/**
 * Created by Administrator on 2017/9/5 0005.
 */

import React from 'react';
import {Link} from 'react-router';

class Index extends React.Component {
    render() {
        return (
            <div>
                <p>NotFound</p>
                <Link to="/list">To List</Link>
            </div>
        );
    }
}

export default Index;