import React, { Component, useState, useEffect }  from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './pages/Homepage/Homepage'
import Nav from './components/Nav/Nav'
import './App.css';
import createHistory from 'history/createBrowserHistory'

const routes = [
  { path: '/', name: 'Home', Component: Home },
]


const history = createHistory()
export default () => {
  return(
    <Router history={history}>
      <Nav/>
      <Route
        render={({ location }) => {
        const {key} = location

          return(
            <TransitionGroup component={null}>
                <CSSTransition
                key={key}
                appear={true}
                classNames="my-node"
                timeout={{enter: 2500, exit: 2500}}
                >
                <Switch location={location}>
                  {routes.map(({ path, Component }) => (
                    <Route key={path} exact path={path}>
                      {({ match }) => (
                        <div className="my-node">
                          <Component/>
                        </div>
                      )}
                    </Route>
                  ))}
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )    
        }}
      />
    </Router>
  )
}