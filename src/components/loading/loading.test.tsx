import { cleanup, render } from '@testing-library/react'
import React from 'react'
import Loading from './'

describe('<Loading> component:', () => {
  afterEach(cleanup)

  test('render Loading component', () => {
    render(<Loading />)
  })
})
