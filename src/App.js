import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import React from "react";
import './App.css';
import Home from './components/home';
import Test from './components/test'
import Bar from './components/navbar.js';
import Slider from './components/slider.jsx';


function App() {
  return (
    <Router>
    <div className="App">
      <div className="display">
        <Bar />
        <Slider />
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