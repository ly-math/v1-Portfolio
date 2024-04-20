import React from 'react'
import './Intro.scss'

function Intro() {
  return (
    <>
      <div className="intro-wrap">
        <h1>Hi, My name is</h1>
        <div className="name">
          <h2>Ly Math </h2>
        <span id='slash'>/ </span>
          <h2 className='khmer'> ម៉ាត់​ លី</h2>

        </div>
        <h3>I'm a front-end Developer</h3>
        <p>Passionate about crafting seamless user experiences through elegant design and innovative code. Currently, I am a student of Norton University in Phnom Penh.</p>
        <div className="logos">
          <div className="slider">
            <img src="./src/assets/html.png" alt="html logo" />
            <img src="./src/assets/css.png" alt="css logo" />
            <img src="./src/assets/sass.png" alt="sass logo" />
            <img src="./src/assets/js.png" alt="js logo" />
            <img src="./src/assets/ts.png" alt="ts logo" />
            <img src="./src/assets/reactjs.png" alt="react logo" />
          </div>
          <div className="slider">
            <img src="./src/assets/html.png" alt="html logo" />
            <img src="./src/assets/css.png" alt="css logo" />
            <img src="./src/assets/sass.png" alt="sass logo" />
            <img src="./src/assets/js.png" alt="js logo" />
            <img src="./src/assets/ts.png" alt="ts logo" />
            <img src="./src/assets/reactjs.png" alt="react logo" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Intro