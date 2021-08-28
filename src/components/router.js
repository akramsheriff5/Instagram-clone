import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './home';
import Message from './message';

function router() {
    return (
        <Router>
            <div>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/message' component={Message} />
          </Switch>
            </div>
        </Router>
        
    )
}

export default router
