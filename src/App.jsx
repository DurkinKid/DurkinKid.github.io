// import { useState } from 'react'
import './App.css'
import { Routes, Route, Navigate, Link } from 'react-router-dom';

import ContactPage from './Pages/ContactPage/ContactPage';
import ProjectsPage from './Pages/ProjectsPage/ProjectsPage';
import HomePage from './Pages/HomePage/HomePage';
import NavBar from './Components/NavBar/NavBar';



function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/contactpage' element={<ContactPage />} />
      <Route path='/projectspage' element={<ProjectsPage />} />
    </Routes>
    </>
  )
}

export default App
