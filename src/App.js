import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About';
import Contact from './component/Contact';
import Home from './component/Home';
import { Login } from './component/Login';
import Navbar from './component/Navbar';
import Service from './component/Service';

function App() {
  return (
    <div>


      <Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/contuct' element={<Contact></Contact>}></Route>
          <Route path='/service' element={<Service></Service>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
        </Routes>
      </Navbar>

    </div>
  );
}

export default App;
