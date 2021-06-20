import { cleanup, render, screen } from '@testing-library/react'
import * as React from 'react'
import Footer from './index'

describe('<Footer> component', () => {
  afterEach(cleanup)

  const title = 'Test Title'
  const name = 'Test FM'

  test('should render Footer component', () => {
    render(<Footer title={title} />)

    // If Only 'Title' prop send nothing to display
    expect(screen.queryByText(title)).toBeNull()
    expect(screen.queryByText(title)).toMatchSnapshot()

    render(<Footer title={title} name={name} />)

    // If 'Name' prop send then display 'title' and 'name'
    expect(screen.getByText(title)).toBeInTheDocument()
    expect(screen.getByText(name)).toBeInTheDocument()
    expect(screen.getByText(name)).toMatchSnapshot()
  })
})
