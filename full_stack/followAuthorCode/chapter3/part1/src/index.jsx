import React from 'react';
import {render} from 'react-dom';

import Profile from './components/page65/index.jsx';
import List from './components/page70/index.jsx';
import Page86 from './components/page86/index.jsx';
import Page89PropTypes from './components/page89_PropTypes/index.jsx';

render(
    <div>
        <Profile />
        <List />
        <Page86 name="张三丰" age="30" />
        <Page89PropTypes name="张三丰" age="30" />
    </div>,
    document.getElementById('root')
);
