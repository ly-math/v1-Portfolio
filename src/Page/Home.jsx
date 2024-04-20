import React from 'react'
import Header from '../Components/Header'
import Intro from '../Components/Intro'
import AboutMe from '../Components/AboutMe'
import Skills from '../Components/Skills'

function Home() {
  return (
    <>
      <div className='home-container'>
          <Header />
          <Intro />
          <AboutMe />
          <Skills />
      </div>
    </>
  )
}

export default Home