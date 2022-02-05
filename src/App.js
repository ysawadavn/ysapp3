import React, { Component } from "react";
import "./App.css";
import Button from "./components/button";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';

//Pages
import MainPage from "./pages";
import NotFoundPage from "./pages/404";
import UsersPage from "./pages/users";
import About from "./pages/about";
import CounterPage from "./pages/counterpage";
import JPHpage from "./pages/jph";
import ImgPage from "./pages/imgsearch";

class App extends Component {
  render() {
    return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/404" component={NotFoundPage} />
        <Route exact path="/users" component={UsersPage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/counterpage" component={CounterPage} />
        <Route exact path="/jph" component={JPHpage} />
        <Route exact path="/imgsearch" component={ImgPage} />
        <Redirect to="/404" />
      </Switch>
    </Router>
    );
  }
}

export default App;