import Header from './components/Header';
import Resume from './components/Resume';
import Contact from './components/Contact';
import About from './components/About';
import Projects from "./components/Projects"
import React from 'react'
import './index.css'
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {


  // const whichBg = () => {

  //   } else if (state === 'Contact') {
  //     return (' h-full md:h-screen w-screen bg-gradient-to-bl from-indigo-200 via-purple-300 via-rose-600 to-pink-300')
  //   } else if (state === 'Projects') {
  //     return ('flex h-full md:h-screen w-screen flex-col bg-gradient-to-b from-indigo-200 via-purple-300 via-rose-600 to-pink-300')
  //   } else if (state === 'Resume') {
  //     return ('flex h-screen w-full flex-col bg-gradient-to-l from-indigo-200  via-rose-600 via-purple-300 to-pink-300 ')
  //   }
  // }

  return (
    <div>
      <Router>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='resume' element={<Resume />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>)
}

export default App;
