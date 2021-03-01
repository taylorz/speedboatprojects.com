import createHistory from 'history/createBrowserHistory';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';
import Nav from './components/Nav/Nav';
import Home from './pages/Homepage/Homepage';

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
                timeout={{enter: 500, exit: 500}}
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