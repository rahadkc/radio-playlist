import { cleanup, fireEvent, render } from '@testing-library/react'
import settings from '../../../lib/settings'
import Previous from '../previous'

describe('<Previous> component', () => {
  afterEach(cleanup)

  test('render Plus button component', () => {
    const element = render(<Previous />)
    expect(element).toMatchSnapshot()
  })

  test('have class .prev', () => {
    const { container } = render(<Previous />)
    expect(container.firstChild).toHaveClass('prev')
  })

  test('handle click', () => {
    const handleClick = jest.fn()
    const { getByText } = render(<Previous onClick={handleClick()} />)
    const component = getByText(settings.PREVIOUS).parentElement

    if (component) {
      fireEvent.click(component)
    }
    expect(handleClick).toHaveBeenCalled()
  })
})
