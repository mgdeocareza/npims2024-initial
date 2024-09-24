// Sidebar.js
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Sidebar extends Component {
  render() {
    return (
      <div style={{ backgroundColor: '#8a1538', height: '100vh', width: '200px', position: 'fixed', top: 50, left: 0 }}>
        <div className="d-flex flex-column align-items-center pt-3">
          <ul className="navbar-nav flex-column">
            <li className="navbar-item">  
              <Link to="/" className="nav-link text-white">
                Properties
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link text-white">
                Add New Property
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link text-white">
                Create User
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
