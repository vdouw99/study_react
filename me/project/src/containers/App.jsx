/**
 * Created by sf on 2017/7/5.
 */

import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <div>
                <div>head</div>
                <div>{this.props.children}</div>
                <div>foot</div>
            </div>
        )
    }
}

export default App;