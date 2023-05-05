import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Menu from "./components/Navbar/Home";
import Home from './components/Home/Home';
import Service from './components/Service/Service'
import About from './components/About/About'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <>
      {/* <Router> */}
      <BrowserRouter>
        <div className="App">
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Routes>
            <Route path="/service" element={<Service />} />
          </Routes>
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
      {/* </Router> */}
    </>
  );
}

export default App;
