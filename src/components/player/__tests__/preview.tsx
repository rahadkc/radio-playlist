import { render } from '@testing-library/react'
import Preview from '../preview'

describe('<Preview> component', () => {
  test('render Preview component', () => {
    const preview = render(<Preview />)
    expect(preview).toMatchSnapshot()
  })
})
