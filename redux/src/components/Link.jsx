/**
 * Created by Administrator on 2017/8/30 0030.
 */

import React from 'react';

const Link = ({active, children, onClick}) => {
    console.log('-------Link:start-------');
    console.log('active:' + active);
    console.log('-----');
    console.log('children:' + children);
    console.log('-----');
    console.log('onClick:' + onClick);
    console.log('-------Link:end-------');
    if (active) {
        return <span>{children}</span>
    } else {
        return (
            <a href="#" onClick={e=>{e.preventDefault();onClick();}}>{children}</a>
        );
    }
};

export default Link;

