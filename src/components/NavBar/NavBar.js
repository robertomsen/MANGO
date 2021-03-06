import React from 'react'
import { Link } from 'react-router-dom'

import './NavBar.css'

const NavBar = ({ actualPage }) => {
  return (
      <nav>
         <Link to='/'><img src='img/logo.png' alt='logo MANGO' /></Link>
        <div>
          <Link to='/'>
            <span className={actualPage === 'home' ? 'active' : null}>Home</span>
          </Link>
          <Link to='/exercise1'>
            <span className={actualPage === 'exercise1' ? 'active' : null}>Exercise 1</span>
          </Link>
          <Link to='/exercise2'>
            <span className={actualPage === 'exercise2' ? 'active' : null}>Exercise 2</span>
          </Link>
        </div>
      </nav>
  )
}

export default NavBar
