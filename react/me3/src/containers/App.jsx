/**
 * Created by Administrator on 2017/9/6 0006.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link} from 'react-router';

class Index extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {initDone: false};
    }

    componentDidMount() {
        setTimeout(()=> {
            this.setState({initDone: true});
        }, 2000);
    }

    render() {
        return (
            <div>
                <div>Header</div>
                {
                    this.state.initDone ? this.props.children : <div>正在加载...</div>
                }
                <div>Footer</div>
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

