import { cleanup, render } from '@testing-library/react'
import React from 'react'
import Container from './'

const text = 'Test'

describe('<Container>', () => {
  afterEach(cleanup)

  test('render Container component', () => {
    render(
      <Container classes="test" style={{ color: 'black' }}>
        <p>{text}</p>
      </Container>
    )
  })

  test('render Wrapper component', () => {
    const { getByText } = render(
      <Container classes="test" style={{ color: 'black' }}>
        <p>{text}</p>
      </Container>
    )

    expect(getByText(text)).toBeInTheDocument()
  })
})
