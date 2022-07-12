import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
ReactDOM.render(
  <Router>
      <Switch>
        <Route path='/page/:pageNum' component={App}/>
        <Route path='/' component={App}/>
      </Switch>
  </Router>,
  document.getElementById('root')
);
