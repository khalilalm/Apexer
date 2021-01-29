import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './NavigationBar/Nav';
import Home from './Home/Home';
import Tracker from './Tracker/Tracker';
import './App.css';
import NotFound from './NotFound/NotFound';
import Rank from './Rank/Rank';
import About from './About/about'

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App"> 
      <Nav />
      <Switch>
        <Route path='/' exact component={Home} /> 
        <Route path='/Tracker' component={Tracker} />
        <Route path='/Rank' component={Rank} />
        <Route path='/About' component={About} />
        <Route component={NotFound}/>
      </Switch>
   
    
    </div>
    </Router>
  );
}

export default App;
