import React, { useState } from 'react'
import Bullet from '../Bullet/Bullet'

import './Range.css'

const Range = ({ minValue, maxValue, steps }) => {
  const [firstBulletValue, setFirstBulletValue] = useState(minValue)
  const [lastBulletValue, setLastBulletValue] = useState(maxValue)

  const onChangeValueBullet = (value, secondBullet) => {
    secondBullet ? setLastBulletValue(value) : setFirstBulletValue(value)
  }

  return (
    <div className='container'>
      <p className='values left-value'>{firstBulletValue}</p>
      <div id='bar'>
        <Bullet id='bullet1' onChangeValueBullet={onChangeValueBullet} maxValue={maxValue} />
        <Bullet id='bullet2' onChangeValueBullet={onChangeValueBullet} maxValue={maxValue} secondBullet={true}/>
      </div>
      <p className='values right-value'>{lastBulletValue}</p>
    </div>
  )
}

export default Range
