// React
import React, { useState } from "react";

// Browser Router
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Logo
import Logo from "../images/logo.svg";

// Semantic components
import { Menu, Dropdown, Container, Icon, Image } from "semantic-ui-react";

import PageLinks from "../constants/PageLinks";

import ApplicationTitle from "../constants/Application";

export default function BrowserLinks() {
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <>
      <Menu>
        <Container>
          <Menu.Item>
            <Image className="logo" src={Logo} />{" "}
            <span>{ApplicationTitle}</span>
          </Menu.Item>
          <Menu.Menu position="right">
            <Dropdown text={activeLink} pointing className="link item">
              <Dropdown.Menu>
                {PageLinks.map(link => (
                  <Dropdown.Item key={link.id}>
                    <Icon name={link.icon} size="small" />
                    <Link
                      className="browser-link"
                      onClick={() => setActiveLink(link.displayName)}
                      to={link.page}
                    >
                      {link.displayName}
                    </Link>
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Container>
      </Menu>
    </>
  );
}
