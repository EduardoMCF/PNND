import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

import Listing from './pages/Listing.js';
import Annotate from './pages/Annotate.js';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Listing} />
          <Route exact path="/annotate" component={Annotate} />
        </Switch>
      </Router>
    );
  }
}

export default App;