import React from "react";
import Background from "./Utils/images/background.jpg";

import { HashRouter, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Navi from "./components/Navi/Navi";

import Home from "./pages/Main/home.js";
import AboutMe from "./pages/about/AboutMe";
import Projects from "./pages/Projects/Projects";

function App() {
  return (
    <div
      className="main-view"
      fluid="true"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        minHeight: "100%",
        height: 1000,
        position: "fixed",
        width: "100%",
      }}
    >
     <Navi/>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={AboutMe} />
          <Route exact path="/Projects" component={Projects} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
