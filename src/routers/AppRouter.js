import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";
import { LoginScreem } from "../components/login/LoginScreen";
import { DcScreen } from "../components/dc/DcScreen";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        
        <Navbar/>

        
        <Switch>
          <Route  exact path="/login" component={LoginScreem}>
           
          </Route>

          <Route exact  path="/" component={DcScreen}>
           
          </Route>
         
        </Switch>
      </div>
    </Router>
  );
};
