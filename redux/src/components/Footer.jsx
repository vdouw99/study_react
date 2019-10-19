/**
 * Created by Administrator on 2017/8/30 0030.
 */

import React from 'react';
import FilterLink from '../containers/FilterLink.jsx';

const Footer = () =>(
    <p>
        show:
        <FilterLink filter="SHOW_ALL">All</FilterLink>
        <span>&nbsp;&nbsp;</span>
        <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
        <span>&nbsp;&nbsp;</span>
        <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
    </p>
);

export default Footer;