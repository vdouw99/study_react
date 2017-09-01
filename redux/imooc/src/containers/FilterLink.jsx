/**
 * Created by Administrator on 2017/8/30 0030.
 */

import React from 'react';
import {connect} from 'react-redux';
import Link from "../components/Link.jsx";
import {setVisibility} from '../actions/index.jsx';

//第二个参数表示组件自身的props
const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
};

const mapDispatchProps = (dispatch, ownProps) => {
    return {
        onClick: function () {
            dispatch(setVisibility(ownProps.filter))
        }
    }
};

const FilterLink = connect(mapStateToProps, mapDispatchProps)(Link);
// 逻辑组件，肯定包含一个显示组件
// 比如，逻辑组件FilterLink.jsx对应有一个显示组件Link.jsx

export default FilterLink;
