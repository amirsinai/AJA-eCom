import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports"
import React from "react";
import './App.css';

import Home from './components/home';
import Product from './components/productItemPage'
import Bar from './components/navbar.js';
import Footer from './components/footer.jsx';
import ProductCatalogue from './components/productlist.jsx';
import CreateUser from "./components/userComponents/createUser"
import LoginUser from "./components/userComponents/loginUser"
import WishlistPage from "./components/wishlist-page/wishlist"
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
              <Route path='/:id' element={<Product />} />
              <Route path="/products" element={<ProductCatalogue />} />
              <Route path="/createUser" element={<CreateUser />} />
              <Route path='/login' element={<LoginUser/>} />
              <Route path="/wishlist" element={<WishlistPage />} />
            </Routes>
        </main>
        <Footer />
      </div>
    </div>
    </Router>
  );
}
export default App;