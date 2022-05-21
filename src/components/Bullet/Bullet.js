import React, { useEffect } from 'react'

import './Bullet.css'

const Bullet = ({ id, minValue, maxValue, onChangeValueBullet, onChangePercentagePositionBullet, secondBullet, positionAnotherBullet, steps = null }) => {
  useEffect(() => {
    const bar = document.getElementById('bar')
    const bullet = bar.querySelector(`#${id}`)

    if (secondBullet) {
      const rightEdge = bar.offsetWidth - bullet.offsetWidth
      bullet.style.left = `${rightEdge}px`
    }
  }, [])

  const onMouseUp = () => {
    document.removeEventListener('mouseup', onMouseUp)
    document.removeEventListener('mousemove', onMouseMove)
  }

  const onMouseMove = (event) => {
    const bar = document.getElementById('bar')
    const bullet = bar.querySelector(`#${id}`)

    bullet.ondragstart = function () {
      return false
    }

    let newLeft = event.clientX - bar.getBoundingClientRect().left

    if (newLeft < 0) {
      newLeft = 0
    }

    const maxRight = bar.offsetWidth - bullet.offsetWidth

    if (newLeft > maxRight) {
      newLeft = maxRight
    }

    let percentage = calcPercentage(newLeft, maxRight)
    const pxAnotherBullet = calcPxBulletWithPercentage(maxRight, positionAnotherBullet)

    if (!secondBullet) {
      if (percentage >= positionAnotherBullet - 5) {
        newLeft = (pxAnotherBullet - 20)
        percentage = calcPercentage(newLeft, maxRight)
      }
    } else {
      if (percentage <= positionAnotherBullet + 5) {
        newLeft = (pxAnotherBullet + 20)
        percentage = calcPercentage(newLeft, maxRight)
      }
    }

    const percentageScaleOne = percentage * 1 / 100
    const result = ((maxValue - minValue) * percentageScaleOne) + minValue
    onChangeValueBullet(result, secondBullet)
    onChangePercentagePositionBullet(percentage, secondBullet)

    if (steps) {
      const newPosition = calcNearestRange(steps, result, maxValue, maxRight)
      newLeft = newPosition
    }

    bullet.style.left = `${newLeft}px`
  }

  const onMouseDownBuller = (e) => {
    e.preventDefault()
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
  }

  const calcPxBulletWithPercentage = (maxRight, percentage) => {
    return (percentage * maxRight) / 100
  }

  const calcPercentage = (valToGetPercentage, valMax) => {
    return (valToGetPercentage * 100) / valMax
  }

  const calcNearestRange = (steps, actualValue, maxValue, maxRight) => {
    let newValue = 0
    let diferencia = 99999
    for (let i = 0; i <= steps.fixedValues.length; i++) {
      if (steps.fixedValues[i] === actualValue) {
        return steps.fixedValues[i]
      } else {
        if (Math.abs(steps.fixedValues[i] - actualValue) < diferencia) {
          newValue = steps.fixedValues[i]
          diferencia = Math.abs(steps.fixedValues[i] - actualValue)
        }
      }
    }
    const percentage = calcPercentage(newValue, maxValue)
    const newPx = calcPxBulletWithPercentage(maxRight, percentage)
    console.log(newPx)
    return newPx
  }

  return (
    <div id="mark">
      <div
        className='bullet'
        onMouseDown={(e) => { onMouseDownBuller(e) }}
        draggable={true}
        id={id}
      />
    </div>
  )
}

export default Bullet
