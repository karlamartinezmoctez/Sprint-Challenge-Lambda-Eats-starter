import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//1. import Browser Router
import { BrowserRouter as Router } from 'react-router-dom';
//2. install and import bootstrap
// import "bootstrap/dist/css/bootstrap.min.css "

ReactDOM.render(
<Router>
<App />
</Router>
, document.getElementById("root"));
