import { cleanup, fireEvent, render } from '@testing-library/react'
import settings from '../../../lib/settings'
import Next from '../next'

describe('<Next> component', () => {
  afterEach(cleanup)

  test('render Plus button component', () => {
    const element = render(<Next />)
    expect(element).toMatchSnapshot()
  })

  test('have class .next', () => {
    const { container } = render(<Next />)
    expect(container.firstChild).toHaveClass('next')
  })

  test('handle click', () => {
    const handleClick = jest.fn()
    const { getByText } = render(<Next onClick={handleClick()} />)
    const component = getByText(settings.NEXT).parentElement

    if (component) {
      fireEvent.click(component)
    }
    expect(handleClick).toHaveBeenCalled()
  })
})
