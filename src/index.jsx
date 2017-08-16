// https://github.com/mickberber/reChat
// https://medium.com/front-end-hacking/react-webpack-and-horizon-quick-start-b9335c1ece53

import React from 'react'
import ReactDOM from 'react-dom';
import { Route, Switch, Router } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

import App from './components/app';

ReactDOM.render(
   <Router history={history}>
        <Switch>
          <Route exact path='/' component={App} />
        </Switch>
   </Router>,
   document.querySelector('.attach')
);