import { cleanup, render } from '@testing-library/react'
import React from 'react'
import NoData from './'

describe('<NoData>', () => {
  afterEach(cleanup)

  const text = 'Test'

  test('render with string prop', () => {
    const { getByText } = render(<NoData content={text} />)
    const element = getByText(text)
    expect(element).toBeInTheDocument()
  })

  test('render with JSX.Element prop', () => {
    const { queryByText } = render(<NoData content={<div>{text} More Test here</div>} />)
    const element = queryByText(text, { exact: false })
    expect(element).toBeInTheDocument()
  })
})
