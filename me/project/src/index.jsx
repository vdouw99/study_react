/**
 * Created by sf on 2017/6/29.
 */

import React from 'react';
import {render} from 'react-dom';

import Header from './components/header/index.jsx';
import Hello from './components/hello/index.jsx';

render(
    <Hello />,
    document.getElementById('root')
);
