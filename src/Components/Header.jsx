import React, { useState } from 'react'
import "./Header.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'


function Header() {
  const [isClicked, setIsClicked] = useState(false)


  return (
    <>
    <div className={isClicked ?'header clicked' :'header'}>
      <a href="/">
      <img className='logo' src="./src/assets/logo.png" alt="header logo" />
      </a>
      <div className="bars-icon" onClick={() => setIsClicked(true)}>
        <FontAwesomeIcon icon={faBars} className='bars' />
      </div>

    </div>
      <div className={isClicked? 'links clicked': 'links'}>
        <div className="x-icon" onClick={() => setIsClicked(false)}>
        <FontAwesomeIcon icon={faXmark} className='bars' />
        </div>

        <a href="">{`<Home/>`}</a>
        <a href="">{`<About Me/>`}</a>
        <a href="">{`<Skills/>`}</a>
        <a href="">{`<Contact/>`}</a>

        <div className="btn-def">
          <a href="">Resume</a>
        </div>
      </div>
    </>
  )
}

export default Header