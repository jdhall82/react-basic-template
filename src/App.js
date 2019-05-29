// Import React
import React from "react";

// Import Global CSS
import "./App.css";

// Import Semantic UI CSS
import "semantic-ui-css/semantic.min.css";

import { BrowserRouter as Router } from "react-router-dom";

import TopMenu from "./TopMenu";

function App() {
  return (
    <Router>
      <TopMenu />
    </Router>
  );
}

export default App;
