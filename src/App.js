import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'

import { withAuthenticator } from '@aws-amplify/ui-react'

import Amplify from "aws-amplify";
import awsconfig from "./aws-exports"

import React from "react";
import './App.css';
import Home from './components/home';
import Test from './components/test'
import Bar from './components/navbar.js';
import Footer from './components/footer.jsx';
import PremiumPage from './components/premium.js';
import SignIn from './components/signInPage'


Amplify.configure(awsconfig)


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
              <Route path='/premium' element={<PremiumPage/>} />
              <Route path='/Authentication' element={<SignIn/>} />
            </Routes>
        </main>
        <Footer />
      </div>
    </div>
    </Router>
  );
}
export default App;