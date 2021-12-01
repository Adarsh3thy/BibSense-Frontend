import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
// import Login from './Login/Login';
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import BibDisplay from "./BibDisplay/BibDisplay";
// import Navbar from './Navigation/Navbar';
//Create a Main Component
class Main extends Component {
  render() {
    return (
      <div>
        <Routes>
          {/* <Route path='/' element={<Navbar/>} /> */}
          <Route path="/" element={<Home />} />
          <Route path='/bib' element={<BibDisplay/>} />  
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    );
  }
}
//Export The Main Component
export default Main;
