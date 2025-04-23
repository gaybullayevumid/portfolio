import React from 'react'
import Header from './components/Header/Header'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'

export default function App() {
  return (
    <>
      <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<h1>404</h1>}/>
        </Routes>
      <Footer />
      </Router>
    </>
  )
}
