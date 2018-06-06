/**
 * Created by albertogiovanelli on 06/06/18.
 */
import {createStore, combineReducers, compose} from 'redux';
import {todos} from './reducers/todos';
import {visibilityFilter} from './reducers/visibilityFilter';
import {loadState, saveState} from './utils/localStorage';
import throttle from 'lodash/throttle';

const configureStore = () => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const persistedState = loadState();

    const rootReducer = combineReducers({
        todos,
        visibilityFilter
    });

    const store = createStore(rootReducer, persistedState, composeEnhancers());

    store.subscribe(throttle(() => {
        saveState({
            todos: store.getState()
        })
    }, 1000));

    return store;
};

export default configureStore;