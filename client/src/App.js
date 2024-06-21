import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';//<Navbar/>
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Navbar />}>
              <Route path="Register" element={<Register />}/>
              <Route path="Login" element={<Login />}/>
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
