import React from 'react'
import Header from '../Components/Header'
import Intro from '../Components/Intro'
import AboutMe from '../Components/AboutMe'

function Home() {
  return (
    <>
      <div className='home-container'>
          <Header />
          <Intro />
          <AboutMe />
      </div>
    </>
  )
}

export default Home