import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import './App.css';

const App = () => (
  <Router>
    <Fragment>
      <Navbar></Navbar>
      <Landing></Landing>
      <Route exact path='/' component={Landing}></Route>
    </Fragment>
  </Router>
);

export default App;
