import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/pages/Navbar.js';//<Navbar/>
import Register from './components/pages/Register.js';
import Login from './components/pages/Login.js';
import Profile from './components/pages/profile.js';
import About from './components/pages/About.js'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Navbar />}>
              <Route index element={<About />}/>
              <Route path="Register" element={<Register />}/>
              <Route path="Login" element={<Login />}/>
              <Route path='profile' element={<Profile/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
