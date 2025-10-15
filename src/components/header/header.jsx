import React from 'react'
import logo from '../../assets/second.png'
import './header.scss'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className="container">
      <div className="logo">
        <img src={logo} alt="AbdulrahmanDevLogo" />
      </div>
      <nav>
        <li>
          <Link>home</Link>
        </li>
        <li>
          <Link>about</Link>
        </li>
        <li>
          <Link>projects</Link>
        </li>
        <li>
          <Link>services</Link>
        </li>
        <li>
          <Link>skills</Link>
        </li>
      </nav>
      <button className="btn">
        <Link>contact me</Link>
      </button>
    </header>
  )
}

export default Header
