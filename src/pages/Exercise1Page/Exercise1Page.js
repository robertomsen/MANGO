import React, { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Range from '../../components/Range/Range'
import getResponse from '../../api/APIUtils'
import RangeAPI from '../../api/RangeAPI/RangeAPI'

const Exercise1Page = () => {
  const [ranges, setRanges] = useState(null)

  useEffect(() => {
    getResponse(RangeAPI.endpoints.getRangeMinMax.url, RangeAPI.endpoints.getRangeMinMax.method)
      .then((data) => setRanges(data))
  }, [])

  return (
    <>
      <NavBar actualPage={'exercise1'} />
      <div id='container-text'>
        <h1>Exercise 1: Range component between two defined ranges</h1>
        <p>Obtaining a minimum and maximum range from an external api, perform an input range with the established ranges.</p>
      </div>

      <div id="container-range">
        {ranges && (
          <Range minValue={ranges.min} maxValue={ranges.max} />
        )
        }
      </div>
    </>
  )
}

export default Exercise1Page
