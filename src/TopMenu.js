// Import React
import React, { Component } from "react";

import Home from "./pages/Home";

import About from "./pages/About";

import Contact from "./pages/Contact";

// Import
import { Segment } from "semantic-ui-react";

// Import Browser Router
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import BrowserLinks from "./components/Links";
import Region from "./components/Region";

export default function TopMenu() {
  return (
    <>
      <BrowserLinks />
      <Region name=" ROUTES ">
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Region>
    </>
  );
}
