import { cleanup, render, screen } from '@testing-library/react'
import ItemContent from '../itemContent'

const name = 'Test FM'
const value = '103.8'
const number = 98.4

describe('<ItemContent> component', () => {
  afterEach(cleanup)

  test('render ListItem component', () => {
    render(<ItemContent style={{}} name={name} value={value} />)
    expect(screen.queryByText(name)).toBeInTheDocument()
    expect(screen.queryByText(value)).toBeInTheDocument()

    render(<ItemContent style={{}} name={name} value={number} />)
    expect(screen.queryByText(number)).toBeInTheDocument()
    expect(screen.queryByText(number)).toMatchSnapshot()
  })
})
