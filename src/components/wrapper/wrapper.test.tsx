import { render } from '@testing-library/react'
import React from 'react'
import Wrapper from './'

const text = 'text'

describe('<Wrapper>', () => {
  test('render Wrapper component', () => {
    render(
      <Wrapper classes="test" style={{ color: 'black' }}>
        <p>{text}</p>
      </Wrapper>
    )
  })

  test('render Wrapper component', () => {
    const { getByText } = render(
      <Wrapper classes="test" style={{ color: 'black' }}>
        <p>{text}</p>
      </Wrapper>
    )

    expect(getByText(text)).toBeInTheDocument()
  })
})
