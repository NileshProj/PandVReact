import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/home/home.component';
import Header from './components/header/header.component';
import Profile from './components/profile/profile.component';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {active:1};
    this.setActive = this.setActive.bind(this);
  }

  setActive(index) {
    this.setState({active: index});
  }

  render() {
    return (
      <Router>
        <div>
          <Header active={this.state.active}></Header>
          <Switch>
            <Route exact path="/">
              <Home setActive={this.setActive}></Home>
            </Route>
            <Route path="/profile">
              <Profile></Profile>
            </Route>
          </Switch>
          </div>
      </Router>
    );
  }
  
}

export default App;
