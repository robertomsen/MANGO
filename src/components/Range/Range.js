import React, { useState } from 'react'
import Bullet from '../Bullet/Bullet'

import './Range.css'

const Range = ({ minValue, maxValue, steps }) => {
  const [firstBulletValue, setFirstBulletValue] = useState(() => minValue)
  const [lastBulletValue, setLastBulletValue] = useState(() => maxValue)
  const [firstBulletPosition, setFirstBulletPosition] = useState(() => 0)
  const [lastBulletPosition, setLastBulletPosition] = useState(() => 100)

  const onChangeValueBullet = (value, secondBullet) => {
    secondBullet ? setLastBulletValue(value) : setFirstBulletValue(value)
  }

  const onChangePercentagePositionBullet = (value, secondBullet) => {
    secondBullet ? setLastBulletPosition(value) : setFirstBulletPosition(value)
  }

  return (
    <div className='container'>
      <div className='values left-value'><span>{firstBulletValue.toFixed(2)}€</span></div>
      <div id='bar'>
        <Bullet
          id='bullet1'
          onChangeValueBullet={onChangeValueBullet}
          onChangePercentagePositionBullet={onChangePercentagePositionBullet}
          minValue={minValue}
          maxValue={maxValue}
          valueAnotherBullet={lastBulletValue}
          positionAnotherBullet={lastBulletPosition}
        />
        <Bullet
          id='bullet2'
          onChangeValueBullet={onChangeValueBullet}
          onChangePercentagePositionBullet={onChangePercentagePositionBullet}
          minValue={minValue}
          maxValue={maxValue}
          secondBullet={true}
          valueAnotherBullet={firstBulletValue}
          positionAnotherBullet={firstBulletPosition}
        />
      </div>
      <div className='values right-value'><span>{lastBulletValue.toFixed(2)}€</span></div>
    </div>
  )
}

export default Range
