/**
 * Created by albertogiovanelli on 06/06/18.
 */
import {connect} from 'react-redux';
import React from 'react';
import {addTodo} from '../actions/todoActions';

const AddTodo =  ({ dispatch }) => {
    let input;

    return (
        <div>
            <input ref={node => {
                input = node
            }}/>
            <button
            onClick={() => {
                dispatch(addTodo(input.value));
                input.value = '';
            }}
            >
            Add Todo
            </button>
        </div>
    );
};

export default connect()(AddTodo);