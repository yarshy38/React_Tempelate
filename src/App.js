import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import React from "react";
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Menu from "./components/Navbar/Home";
import Home from './components/Home/Home';
import Service from './components/Service/Service'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Product from './components/Contact/Product';

function App() {
  return (
    <>
      {/* <Router> */}
      <BrowserRouter>
        <div className="App">
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/service" element={<Service />} />

            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </div>
      </BrowserRouter>
      {/* </Router> */}
    </>
  );
}

export default App;
