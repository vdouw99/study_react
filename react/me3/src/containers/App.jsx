/**
 * Created by Administrator on 2017/9/6 0006.
 */

import React from 'react';
import {Link} from 'react-router';

class Index extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/detail/1">detail/1</Link></li>
                    <li><Link to="/detail/2">detail/2</Link></li>
                    <li><Link to="/detail/3">detail/3</Link></li>
                    <li><Link to="/notFound">NotFound</Link></li>
                </ul>
            </div>
        );
    }
}

export default Index;

