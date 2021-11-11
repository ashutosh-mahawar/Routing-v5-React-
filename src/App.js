import React from 'react';
import { BrowserRouter as Router,
         Switch,
         Route, 
         Link, 
         Redirect
        } from 'react-router-dom';

import About from './Component/About';
import Dashboard from './Component/Dashboard';
import Home from './Component/Home';
import NoMatchFound from './Component/NoMatchFound';


const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/" ><Redirect to="/home" /></Route>
          <Route exact path="/home"><Home /></Route>
          <Route exact path="/about" ><About /></Route>
          <Route exact path="/dashboard" ><Dashboard /></Route>
          <Route path="*"><NoMatchFound /></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
