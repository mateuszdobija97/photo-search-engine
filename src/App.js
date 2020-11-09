import React from "react";
import Home from "./components/Home/Home";
import Results from "./components/Results/Results";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { appRoutes } from "./routes/Routes";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={appRoutes.home} component={Home} />
        <Route exact path={appRoutes.results} component={Results} />
      </Switch>
    </Router>
  );
};

export default App;
