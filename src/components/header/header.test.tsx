import { cleanup, render, screen } from '@testing-library/react'
import * as React from 'react'
import Header from './'

describe('<Footer> component', () => {
  const title = 'Station List'
  afterEach(cleanup)

  test('should render Header component with title prop', () => {
    render(<Header title={title} />)

    expect(screen.getByText(title)).toBeInTheDocument()
    expect(screen.queryByText(title)).toMatchSnapshot()
  })
})
