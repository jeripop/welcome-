import React from "react";
import "./App.css";

import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
import { Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import NoMatch from "./components/nomatch/NoMatch";
import { Switch } from "react-router-dom";
import Jeopardy from "./components/jeopardy/Jeopardy";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" render={(props) => <Welcome {...props} />} />
        <Route
          exact
          path="/welcome/:name"
          render={(props) => <Welcome {...props} />}
        />
        <Route exact path="/clock" component={Clock} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/jeopardy" component={Jeopardy} />
        <Route path="*" component={NoMatch} />
      </Switch>

      {/* <Welcome name="Jeri" />
      <Clock />
      <Contact /> */}
    </div>
  );
}

export default App;
