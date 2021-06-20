import { cleanup, render } from '@testing-library/react'
import React from 'react'
import Box from './'

const text = 'Test'

describe('<Box> component', () => {
  afterEach(cleanup)

  test('render Box component', () => {
    render(
      <Box classes="test" style={{ color: 'black' }}>
        <p>{text}</p>
      </Box>
    )
  })

  test('JSX Element render as child', () => {
    const { getByText } = render(
      <Box classes="test" style={{ color: 'black' }}>
        <p>{text}</p>
      </Box>
    )
    expect(getByText(text)).toBeInTheDocument()
  })
})
