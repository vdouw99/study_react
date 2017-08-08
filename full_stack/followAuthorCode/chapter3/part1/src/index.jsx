import React from 'react';
import {render} from 'react-dom';

import Profile from './components/page65/index.jsx';
import List from './components/page70/index.jsx';
import Page86 from './components/page86/index.jsx';
import Page89PropTypes from './components/page89_PropTypes/index.jsx';
import Page90_Liked from './components/page90_Liked/index.jsx';

render(
    <div>
        <Profile />
        <List />
        <Page86 name="张一丰" age="30" />
        <Page89PropTypes name="张二丰" age="29" />
        <Page90_Liked name="张三丰" age="28" />
    </div>,
    document.getElementById('root')
);
