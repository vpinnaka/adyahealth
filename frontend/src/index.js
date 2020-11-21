import React from "react";
import ReactDOM from "react-dom";
import axios from "axios"; // new
import { HashRouter } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import BaseRoute from "./BaseRoute";

axios.defaults.xsrfCookieName = 'csrftoken'; // new
axios.defaults.xsrfHeaderName = 'X-CSRFToken'; // new

ReactDOM.render(
  <HashRouter>
    <BaseRoute />
  </HashRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
