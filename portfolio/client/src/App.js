import React from "react";

import { HashRouter, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import Navi from "./components/Navi";

import Home from "./pages/Main/home.js";

import About from "./pages/about";

function App() {
  return (
    <Container fluid="true">
      <Navi />
      <div className="main-view">
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </HashRouter>
      </div>
    </Container>
  );
}

export default App;
