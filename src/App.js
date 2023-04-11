import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import { BrowserRouter as Routes, Route, Router } from "react-router-dom";
import Menu from "./components/Navbar/Home";
import Home from './components/Home/Home';
// import Service from './components/Service/Service'
// import About from './components/About/About'
// import Contact from './components/Contact/Contact'

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
        </div>
      </BrowserRouter>
      {/* </Router> */}
    </>
  );
}

export default App;
