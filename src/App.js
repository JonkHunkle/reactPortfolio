import Header from './components/Header';
import Contact from './components/Contact';
import About from './components/About';
import Projects from "./components/Projects"
import React, { useState } from 'react'
import './index.css'

function App() {
  const [state, setState] = useState('About');

  const handleClick = (page) => {
    setState(page)
  }
  const whichPage = () => {
    if (state === 'About') {
      return (<About />)
    } else if (state === 'Contact') {
      return (<Contact />)
    } else if (state === 'Projects') {
      return (<Projects />)
    }
  }

  return (
    <div class='flex h-screen w-screen flex-col bg-gradient-to-br from-indigo-200 via-purple-300 via-rose-600 to-pink-300'>
      <Header handleClick={handleClick} />
      {whichPage()}
    </div>);
}

export default App;
