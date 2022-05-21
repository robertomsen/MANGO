import React from 'react'
import NavBar from '../../components/NavBar/NavBar'

import './HomePage.css'

const HomePage = () => {
  return (
    <>
      <NavBar actualPage={'home'} />
      <div id='text-introduction'>
        <h1>Welcome to the MANGO technical test</h1>
        <p>To get started, scroll between the various links in the menu</p>
        <h1>HAPPY TESTING!</h1>
      </div>
    </>
  )
}

export default HomePage
