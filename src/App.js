import React, { Component, useState, useEffect }  from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './pages/Homepage/Homepage'
import Studio from './pages/Studio/Studio'
import Contact from './pages/Contact/Contact'
import Nav from './components/Nav/Nav'
import Transition from './components/Transition/Transition'
import './App.css';
import createHistory from 'history/createBrowserHistory'

import PILLARS from './constants/pillars'

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/studio', name: 'Studio', Component: Studio },
  // { path: '/contact', name: 'Contact', Component: Contact },
]


const history = createHistory()
export default () => {
  const [randomNum, setRandomNum] = useState(0);
  const changeNum = () => {
    setTimeout(() => 
      setRandomNum(Math.floor(Math.random() * PILLARS.length)), 2500
    )
  }
  return(
    <Router history={history}>
      <Nav onClick={changeNum}/>
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
                          <Transition
                            textColor={PILLARS[randomNum].textColor}
                            backgroundColor={PILLARS[randomNum].backgroundColor}
                            statement={PILLARS[randomNum].statement}
                            />
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