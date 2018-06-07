/**
 * Created by albertogiovanelli on 06/06/18.
 */
import React from 'react';
import { Link } from 'react-router-dom';
/*
import {connect} from 'react-redux';
import Link from '../components/Link';
import {setVisibilityFilter} from '../actions/todoActions';

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick() {
        dispatch(setVisibilityFilter(ownProps.filter))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);*/

const FilterLink = ({filter, children}) => (
    <Link
        to={filter === 'all' ? '' : filter}
        activeStyle = {{
            textDecoration : 'none',
            color : 'black'
        }}
    >
        {children}
    </Link>
);

export default FilterLink;
