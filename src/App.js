import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Routers from "./routes/Routers";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routers />
        <Footer />
      </div>
    </Router>
  );
}
export default App;
