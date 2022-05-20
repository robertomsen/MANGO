import React, { useState, useEffect } from 'react'

import './Bullet.css'

const Bullet = ({ id, maxValue, onChangeValueBullet, secondBullet }) => {
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

    bullet.style.left = `${newLeft}px`

    const newRange = ((newLeft * maxRight) / maxValue)
    onChangeValueBullet(newRange, secondBullet)
  }

  const onMouseDownBuller = (e) => {
    e.preventDefault()
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
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
