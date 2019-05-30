// Import React
import React from "react";

// Home Page
import Home from "./pages/Home";

// Import
import { Container } from "semantic-ui-react";

// Links
import PageLinks from "./constants/PageLinks";

// Import Browser Router
import { BrowserRouter as Router, Route } from "react-router-dom";

// Browser Links
import BrowserLinks from "./components/Links";

export default function TopMenu() {
  return (
    <>
      <BrowserLinks />
      <Container>
        <Route exact path="/" component={Home} />
        {PageLinks.map(link => (
          <Route
            key={link.id}
            exact
            path={link.page}
            component={link.component}
          />
        ))}
      </Container>
    </>
  );
}
