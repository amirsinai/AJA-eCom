import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports"
import React from "react";
import './App.css';

import Home from './components/home';
import Test from './components/test'
import Bar from './components/navbar.js';
import Footer from './components/footer.jsx';
import Products from './components/productlist.jsx';
import CreateUser from "./components/user/userComponents/createUser"
import LoginUser from "./components/user/userComponents/loginUser"
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
              <Route path="/products" element={<Products />} />
              <Route path="/createUser" element={<CreateUser />} />
              <Route path='/login' element={<LoginUser/>} />
            </Routes>
        </main>
        <Footer />
      </div>
    </div>
    </Router>
  );
}
export default App;