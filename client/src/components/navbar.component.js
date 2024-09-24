import React, { Component } from "react";
import { Link } from "react-router-dom";
import npims_logo from './npims-logo-b.png'; 
import mainlib_logo from './mainlib-logo.png'; 
import uplb_logo from './uplb-logo.png'; 


export default class Navbar extends Component {
  render() {
    return (
      <nav style={{ backgroundColor: '#8a1538', width: '100%'}} className="navbar navbar-dark navbar-expand-lg container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={npims_logo} alt="NPIMS Logo" style={{ height: '40px' }} />
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">  
              <Link to="/" className="nav-link">
                {" "}
                Properties
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">
                {" "}
                Add New Property
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">
                Create User
              </Link>
            </li>
          </ul>
        </div>
        <div className="ml-auto d-flex align-items-center">
          <img src={mainlib_logo} alt="Logo 1" style={{ height: '50px', marginRight: '10px' }} />
          <img src={uplb_logo} alt="Logo 2" style={{ height: '50px' }} />
        </div>
      </nav>
    );
  }
}
