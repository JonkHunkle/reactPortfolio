import Header from './components/Header';
import Contact from './components/Contact';
import About from './components/About';
import Projects from "./components/Projects"
import React, { useState } from 'react'
import './index.css'
import Footer from './components/Footer';

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
  const whichBg = () => {
    if (state === 'About') {
      return ('flex h-full w-full flex-col bg-gradient-to-br from-indigo-200 via-purple-300 via-rose-600 to-pink-300')
    } else if (state === 'Contact') {
      return ('h-screen w-screen bg-gradient-to-bl from-indigo-200 via-purple-300 via-rose-600 to-pink-300')
    } else if (state === 'Projects') {
      return ('flex h-screen w-screen flex-col bg-gradient-to-b from-indigo-200 via-purple-300 via-rose-600 to-pink-300')
    }
  }

  return (
    <div class={whichBg()}>
      <Header handleClick={handleClick} />
      {whichPage()}
      <Footer />
    </div>)
}

export default App;
