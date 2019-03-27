import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './Home';
import Microservice from './Microservice';
import Login from './Login';
import Register from './Register';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header style={{minHeight: '7vh', backgroundColor: '#0f6ab4', display: 'flex'}}>
            <p style={{margin: 'auto 20px', color: 'white', width: '12%', cursor: 'pointer'}}
               onClick={() => window.location = '/'}>
                The PurplePages
            </p>
            <div style={{margin: 'auto 0px', width: '72%', color: 'white'}}>
                Software Architecture - Team 01
            </div>

            <div style={{margin: 'auto 0px'}}>
                <span onClick={() => window.location = '/login'} style={{color: 'white', cursor: 'pointer'}}>
                    Login
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span onClick={() => window.location = '/register'} style={{color: 'white', cursor: 'pointer'}}>
                    Register
                </span>
            </div>
        </header>
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/microservice" component={Microservice} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
            </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
