import React from 'react'
import Range from '../../components/Range/Range'

const Exercise1Page = () => {
  return (
    <div id="page" style={{ width: '500px', margin: '0 auto' }}>
      <h1>Exercise 1</h1>
      <Range minValue={200} maxValue={400} />
    </div>
  )
}

export default Exercise1Page
