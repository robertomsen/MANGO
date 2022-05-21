import React from 'react'
import Range from './Range'
import { render } from '@testing-library/react'

test('render content', () => {
  const rangeObject = {
    min: 50,
    max: 100
  }

  const container = render(<Range minValue={rangeObject.min} maxValue={rangeObject.max} />)
  container.getByText(rangeObject.min + '.00€')
  container.getByText(rangeObject.max + '.00€')
})
