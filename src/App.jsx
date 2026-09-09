import React from 'react'
import Home from './pages/Home';
import { Routes,Route } from "react-router"
import Navbar from './components/shared/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;