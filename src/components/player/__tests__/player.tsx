import { render } from '@testing-library/react'
import Player from '../index'

const handleClick = () => {
  console.log('clicked!')
}

describe('<Player> component', () => {
  test('render Player component', () => {
    const player = render(<Player prevClick={() => {}} nextClick={handleClick} />)
    expect(player).toMatchSnapshot()
  })

  test('render Player without props', () => {
    const player = render(<Player />)
    expect(player).toMatchSnapshot()
  })
})
