import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import { PublicRoute } from './Routes/PublicRoutre';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for style


function App() {

  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <div>
      <Navbar>
        <Routes>
          {
            PublicRoute.map(({ path, Component }) => (
              <Route path={path} element={<Component />}  > </Route>

            ))
          }
        </Routes>
      </Navbar>

    </div>
  );
}

export default App;
