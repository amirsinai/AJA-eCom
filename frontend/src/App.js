import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import React from "react";
import {useState, useEffect} from 'react';
import './App.css';
import Home from './components/home';
import Test from './components/test';
import Bar from './components/navbar';

function App() {
  const [test, setTest] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/test')
    .then((res) => res.json())
    .then((data) => {
      setTest(data)
    })
  }, [])


   console.log(test)
  return (
    <Router>
    <div className="App">
        <Bar />
        <Home />
        <Test />

    <div className="display">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
          </Routes>
    </div>
    </div>
    </Router>
  );
}

export default App;