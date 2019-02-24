import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.scss';

import Home from "./Home";

const App = () => (
  <Router>
    <Home />
  </Router>
);

export default App;
