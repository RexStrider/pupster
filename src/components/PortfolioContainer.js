import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./NavTabs";
import About from "./pages/About";
import Search from "./pages/Search";
import Discover from "./pages/Discover";

export default () => (
  <section>
    <Router>
      <section>
        <NavTabs />
        <Route exact path="/about" component={About} />
        <Route exact path="/discover" component={Discover} />
        <Route exact path="/search" component={Search} />
      </section>
    </Router>
  </section>
)