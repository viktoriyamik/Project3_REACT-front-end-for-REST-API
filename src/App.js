import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import AddPerson from "./components/add-Person.component";
import Person from "./components/Person.component";
import PersonsList from "./components/Persons-list.component";
import About from "./components/About"

// render navigation bar
class App extends Component {
  render() {
    return (
      <div className="mb-3">
        <nav className="navbar navbar-expand navbar-dark bg-dark">
        
        <Link to={"/"} className="navbar-brand ">
        <img
              src="logo_2.JPG"
              width="50"
              height="45"
              className="d-inline-block align-top"
              alt=""
            />
          </Link>

          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/Persons"} className="nav-link">
                Persons
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/about"} className="nav-link">
                About
              </Link>
            </li>
          </div>
        </nav>


        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<PersonsList/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/persons" element={<PersonsList/>} />
            <Route path="/add" element={<AddPerson/>} />
            <Route path="/Persons/:id" element={<Person/>} />
          </Routes>
        </div>

      </div>
    );
  }
}

export default App;
