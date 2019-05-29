// Import React
import React, { useState } from "react";

// Import Browser Router
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Import
import { Menu, Dropdown, Container, Icon } from "semantic-ui-react";

export default function BrowserLinks() {
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <>
      <Menu>
        <Container>
          <Dropdown text={activeLink} pointing className="link item">
            <Dropdown.Menu>
              <Dropdown.Item>
                <Icon name="home" size="small" />
                <Link
                  className="browser-link"
                  onClick={() => setActiveLink("Home")}
                  inverted
                  to="/"
                >
                  Home
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Icon name="info" size="small" />
                <Link
                  className="browser-link"
                  onClick={() => setActiveLink("About")}
                  to="/about"
                >
                  About
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Icon name="mail" size="small" />
                <Link
                  className="browser-link"
                  onClick={() => setActiveLink("Contact")}
                  to="/contact"
                >
                  Contact
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Menu>
    </>
  );
}
