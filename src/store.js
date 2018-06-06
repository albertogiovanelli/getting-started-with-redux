/**
 * Created by albertogiovanelli on 06/06/18.
 */
import {createStore, combineReducers, compose} from 'redux';
import {todos} from './reducers/todos';
import {visibilityFilter} from './reducers/visibilityFilter';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const rootReducer = combineReducers({
    todos,
    visibilityFilter
});

export const store = createStore(rootReducer, composeEnhancers());