import React, {useState} from 'react';
import About from './components/About';
import SideNav from './components/Nav';
import './index.css'
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import { FaList } from 'react-icons/fa'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <Routes>
      <Routes path='/' element={<SideNav />} />
      <Route path='about' element={<About />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/resume' element={<Resume />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </>
  )
}

export default App;
