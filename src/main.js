import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import {App} from './app';
import {TodoList} from './todos/containers';
import {Login} from './login/containers';

const store = createStore(reducer);

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={TodoList}/>
                <Route path="/login" component={Login}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);