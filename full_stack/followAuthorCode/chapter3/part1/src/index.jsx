import React from 'react';
import {render} from 'react-dom';

import Profile from './components/page65/Profile.jsx';
import List from './components/page70/list.jsx';

render(
    <div>
        <Profile />
        <List />
    </div>,
    document.getElementById('root')
);
