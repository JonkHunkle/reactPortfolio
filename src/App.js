import Header from './components/Header';
import Resume from './components/Resume';
import Contact from './components/Contact';
import About from './components/About';
import Projects from "./components/Projects"
import React from 'react'
import './index.css'
import Footer from './components/Footer';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div id='screen'>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>

        <Footer />
      </Router>
    </div>)
}

export default App;
