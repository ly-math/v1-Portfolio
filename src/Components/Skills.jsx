import React from 'react'
import './skills.scss'

function Skills() {
  return (
    <>
      <div className="skills-wrap">
        <h2 className='h2-title'><span>{'<'}</span>Skills <span>{'/>'}</span></h2>
        <div className="section-container">
          <div className="section-one">
            <h3>Languages</h3>
            <div className="child">
              <p>HTML</p>
              <p>CSS</p>
              <p>Javascript</p>
              <p>Typescript</p>
            </div>
          </div>
          <div className="section-two">
            <h3>Tools & Other</h3>
            <div className="child">
              <p>React Js</p>
              <p>SASS</p>
              <p>Git</p>
              <p>Github</p>
              <p>Vscode</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills