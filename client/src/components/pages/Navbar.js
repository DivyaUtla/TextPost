import { Outlet, Link } from "react-router-dom";
import React from 'react';

const Navbar = ({ isLoggedIn }) =>{
  
  return (
  <div className="navbar-page">
    <nav className="navbar navbar-expand-lg  bg-light">
      <div className="container-fluid">
      <Link className="navbar-brand" to="/">My POST Website</Link>
      
      <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
          {!isLoggedIn && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/Login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Register">Register</Link>
              </li>
              </>
          )}
              {isLoggedIn && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile">Profile</Link>
                  </li>
                </>
          )}
        </ul>
      </div>
      </div>
    </nav>
    <Outlet />
  </div>
);
        };

export default Navbar;