/**
 * Created by albertogiovanelli on 06/06/18.
 */
import React from 'react';
import Todo from './Todo';

const TodoList = ({
    todos,
    onTodoClick
}) => (
    <ul>
        {

            todos.map(todo =>
                <Todo
                    key={todo.id}
                    onClick={() => onTodoClick(todo.id)}
                    {...todo}
                >

                </Todo>
            )
        }
    </ul>
);
export default TodoList;