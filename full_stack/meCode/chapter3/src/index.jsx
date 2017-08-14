import React from 'react';
import {render} from 'react-dom';

import './index.css';

import Page65_Component from './components/page65/index.jsx';
import P70_Component from './components/page70/index.jsx';
import Page86_Props from './components/page86_Props/index.jsx';
import Page89_PropTypes from './components/page89_PropTypes/index.jsx';
import Page90_Liked from './components/page90_Liked/index.jsx';
import Page91_Lifecycle from './components/page91_Lificycle/index.jsx';
import Page93_Combination from './components/page93_Combination/index.jsx';
import Page97_refs from './components/page97_ref/index.jsx';

render(
    <div>
        <h4>组件练习1</h4>
        <Page65_Component />
        <hr />

        <h4>组件练习2</h4>
        <P70_Component />
        <hr/>

        <h4>props</h4>
        <Page86_Props name="张一丰" age="30"/>
        <hr/>

        <h4>PropTypes验证</h4>
        <Page89_PropTypes name="张二丰" age="29"/>
        <hr/>

        <h4>state</h4>
        <Page90_Liked name="张三丰" age="28"/>
        <hr />

        <h4>生命周期</h4>
        <Page91_Lifecycle name="张四丰" age="27"/>
        <hr />

        <h4>组合组件</h4>
        <Page93_Combination name="张五丰" age="26"/>
        <hr />

        <h4>refs</h4>
        <Page97_refs name="张六丰" age="25"/>
        <br /><br /><br /><br /><br />
    </div>,
    document.getElementById('root')
);
