/**
 * This file is an entry component for react application, 
 * the new route should be configured when a new file is added like below.
 */

import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import interceptors from "../src/interceptors.js";
import login from "./login";
import dashboard from "./dashboard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Route exact path="/" component={login} />
          <Route exact path="/dashboard" component={dashboard} />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;