import { cleanup, render } from '@testing-library/react'
import React from 'react'
import Body from './'

const text = 'Test'

describe('<Body>', () => {
  afterEach(cleanup)

  test('render Body component', () => {
    render(
      <Body classes="test">
        <p>{text}</p>
      </Body>
    )
  })

  test('JSX render as child', () => {
    const { getByText } = render(
      <Body classes="test">
        <p>{text}</p>
      </Body>
    )

    expect(getByText(text)).toBeInTheDocument()
  })
})
