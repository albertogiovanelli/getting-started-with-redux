/**
 * Created by albertogiovanelli on 06/06/18.
 */
import {createStore, compose} from 'redux';
import {loadState, saveState} from './utils/localStorage';
import throttle from 'lodash/throttle';
import {rootReducer} from './reducers/rootReducer';

const configureStore = () => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const persistedState = loadState();


    const store = createStore(rootReducer, persistedState, composeEnhancers());

    store.subscribe(throttle(() => {
        saveState({
            todos: store.getState().todos
        })
    }, 1000));

    return store;
};

export default configureStore;