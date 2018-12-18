import React from 'react';
import ReactDOM from 'react-dom'
import './style.css';
import MainComponent from './components/MainComponent';
import MoreDetailsComponent from './components/MoreDetailsComponent';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const routing = (
  <Router>
    <div>
      {/*<ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/MoreDetailsComponent">More</Link>
        </li>
      </ul>*/}
      <Switch>
        <Route exact path="/" component={MainComponent} />
        <Route path="/MoreDetailsComponent" component={MoreDetailsComponent} />
      </Switch>
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
