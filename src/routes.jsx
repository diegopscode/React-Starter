import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import promise from 'redux-promise'

import reducers from './reducers'

import Header from './components/header'
import Home from './containers/home'
import Post from './containers/post'
import PostNew from './containers/post_new'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const Routes = () => ( 
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/post/new" component={PostNew} />
                    <Route exact path="/post/:id" component={Post} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
)

export default Routes;