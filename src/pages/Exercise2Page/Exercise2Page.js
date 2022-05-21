import React, { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Range from '../../components/Range/Range'
import getResponse from '../../api/APIUtils'
import RangeAPI from '../../api/RangeAPI/RangeAPI'

const Exercise2Page = () => {
  const [steps, setSteps] = useState(null)

  useEffect(() => {
    getResponse(RangeAPI.endpoints.getFixedValuesRange.url, RangeAPI.endpoints.getFixedValuesRange.method)
      .then((data) => setSteps(data))
  }, [])

  return (
    <>
      <NavBar actualPage={'exercise2'} />
      <div id='container-text'>
        <h1>Exercise 2: Range component with fixed values defined</h1>
        <p>Obtaining a fixed range of values, it builds an input range, which, when dragging the bullet, stays in the specified range.</p>
      </div>

      <div id="container-range">
        {steps && (
          <Range minValue={steps.fixedValues[0]} maxValue={steps.fixedValues[steps.fixedValues.length - 1]} steps={steps}/>
        )
        }
      </div>
    </>
  )
}

export default Exercise2Page
