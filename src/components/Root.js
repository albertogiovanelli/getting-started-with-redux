/**
 * Created by albertogiovanelli on 06/06/18.
 */
import React from 'react';
import {Provider} from 'react-redux';
import App from '../App';
import {Router, Route, Switch,} from 'react-router';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

const Root = ({store}) => (
    <Provider store={store}>
        <Router history={history}>
            <Route path='/:filter?' component={App}/>
        </Router>
    </Provider>
);

export default Root;