import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Range from '../../components/Range/Range'

const Exercise1Page = () => {
  return (
    <>
      <NavBar actualPage={'exercise1'} />
      <div id="page">
        <Range minValue={200} maxValue={400} />
      </div>
    </>
  )
}

export default Exercise1Page
