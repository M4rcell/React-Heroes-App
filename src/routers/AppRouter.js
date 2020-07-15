import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { DashBoardRoutes } from "./DashBoardRoutes";
import { LoginScreen } from "../components/login/LoginScreen";

export const AppRouter = () => {
  return (
    <Router>
      <div>
               
        <Switch>
          <Route  exact path="/login" component={LoginScreen}>
           
          </Route>

          <Route path="/" component={DashBoardRoutes}>
           
          </Route>
         
        </Switch>
      </div>
    </Router>
  );
};
