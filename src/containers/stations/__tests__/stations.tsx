import { cleanup, render } from '@testing-library/react'
import Stations from '../index'

describe('<Stations>', () => {
  afterEach(cleanup)

  test('render Stations component', async () => {
    const element = render(<Stations />)
    expect(element).toMatchSnapshot()
  })
})
