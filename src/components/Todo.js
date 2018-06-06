/**
 * Created by albertogiovanelli on 06/06/18.
 */
import React from 'react';

const Todo = ({
    onClick,
    completed,
    text
}) => (
    <li
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        {text}
    </li>
);

export default Todo;