import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./components/home";
import Test from "./components/test";
import Bar from "./components/navbar.js";
import { DataStore } from "@aws-amplify/datastore";
import { Products } from "./models";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="display">
          <Bar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/test" element={<Test />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}
export default App;
