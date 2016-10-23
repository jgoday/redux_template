import React from "react"
import ReactDOM from "react-dom"
import {Router, Route, IndexRoute, browserHistory} from "react-router"

import {createStore, applyMiddleware, combineReducers} from "redux"
import {Provider} from "react-redux"
import createLogger from "redux-logger"
import thunkMiddleware from "redux-thunk"
import {syncHistoryWithStore, routerReducer } from "react-router-redux"

import AppContainer from "./containers/AppContainer"
import reducers from "./reducers"

import "./less/main.less"

const loggerMiddleware = createLogger()

const store = createStore(
    combineReducers({
        ...reducers,
        routing: routerReducer
    }),
    applyMiddleware(
        thunkMiddleware,
        // loggerMiddleware
    ))

const history = syncHistoryWithStore(browserHistory, store)

const routes = <Provider store={store}>
    <Router history={history}>
        <Route path="/" component={AppContainer}>
        </Route>
    </Router>
</Provider>

ReactDOM.render(
    routes,
    document.getElementById("main"))