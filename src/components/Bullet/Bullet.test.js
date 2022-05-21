import React from 'react'
import Bullet from './Bullet'
import { render } from '@testing-library/react'
import Range from '../Range/Range'

test('render content (bullet)', () => {
  let wrapper = render(<Range minValue={100} maxValue={200} />)
  wrapper = render(<Bullet id={'bullet1'} />)
  wrapper.container.querySelector('#bullet1')
})
