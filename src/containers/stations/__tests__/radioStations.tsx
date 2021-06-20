import { cleanup, render } from '@testing-library/react'
import RadioStationList from '../radioStationList'

describe('<RadioStationList>', () => {
  afterEach(cleanup)

  test('render RadioStationList component', () => {
    const element = render(<RadioStationList />)
    expect(element).toMatchSnapshot()
  })

  test('have two hFull class', () => {
    const { container } = render(<RadioStationList />)
    expect(container.firstChild).toHaveClass('hFull')
    expect(container.firstChild).toHaveClass('hFull')
  })
})
