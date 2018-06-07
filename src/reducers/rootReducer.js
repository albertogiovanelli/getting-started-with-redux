/**
 * Created by albertogiovanelli on 07/06/18.
 */
import {combineReducers} from 'redux';
import todos, * as fromTodos from '../reducers/todos';
import {visibilityFilter} from '../reducers/visibilityFilter';

export const rootReducer = combineReducers({
    todos,
    visibilityFilter
});

export const getVisibleTodos = (state, filter) => fromTodos.getVisibleTodos(state.todos,filter);
