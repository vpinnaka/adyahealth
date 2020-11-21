import React from "react";
import { Switch, Route } from "react-router-dom";
import dashboard from "../ui/dashboard.png";

export default function LayoutRoute() {
  return (
        <Switch>
          <Route path="/">
            <img src={dashboard} alt=""/>
          </Route>
        </Switch>
    
  );
}