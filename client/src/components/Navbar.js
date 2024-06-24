import { Outlet, Link } from "react-router-dom";
import React from 'react';

const Navbar = ({ isLoggedIn }) =>{
  
  return (
  <div className="navbar-page">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        My POST Website
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
      
          {!isLoggedIn && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/Login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Register">Register</Link>
              </li>
           
              <li className="nav-item">
                <Link className="nav-link" to="/Profile">Profile</Link>
              </li>
            </>
          )}
        
      </div>
    </nav>
    <Outlet />
  </div>
);
        };

export default Navbar;