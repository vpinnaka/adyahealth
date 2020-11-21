import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import Layout from "./layout/Layout";
import { ThemeProvider } from "@emotion/react";
import {lightTheme} from "./styles/theme"

export default function BaseRoute() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Router>
        <Switch>
          <Route path="/login" render={(props) => <Login {...props} />} />
          <Route path="/logout" render={(props) => {localStorage.clear(); return <Redirect to={{ pathname: '/login' }} />}} />
          <ProtectedRoute exact path="/" component={Layout} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
