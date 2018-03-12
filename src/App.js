import React, { Component } from 'react';
import MainContainer from './MainContainer'
import Overview from './Overview';
import { Switch, Route } from 'react-router-dom';
import NotFound from './NotFound';
import Projects from './Projects';
import Teams from './Teams';
import Employees from './Employees';
class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => (
          <Overview />    )}/>
          <Route exact path='/overview' render={() => (
          <Overview  />   )}/>
         <Route exact path='/projects' render={() => (
          <Projects  />   )}/>
        <Route exact path='/teams' render={() => (
          <Teams />   )}/>
        <Route exact path='/employees' render={() => (
          <Employees />   )}/>
        <Route render={() => (
          <NotFound/>   )}/>
      </Switch>
    );
  }
}

export default App;