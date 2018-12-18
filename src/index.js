import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom'
import './style.css';
import MainComponent from './components/MainComponent';
import Users from './components/MainComponent';
import MoreDetailsComponent from './components/MoreDetailsComponent';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

// class App extends Component {
//   constructor() {
//     super();
//   }

//   render() {
//     const routing = (
//       <Router>
//         <div>
//           <Route path="/Main" component={MainComponent} />
//           <Route path="/users" component={Users} />
//         </div>
//       </Router>
//     )
//   }
// }
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
