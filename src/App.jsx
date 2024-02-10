import React from 'react'
import Home from './components/Home'
import Header from './components/Header'
import LocomotiveScroll from 'locomotive-scroll';
import Aboutus from './components/Aboutus';
import Services from './components/Services';
import Projects from './components/Projects';

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='bg-[#292930] w-full'>

      <Header />
      <Aboutus />
      <Services />
      <Projects />
    </div>
  )
}

export default App