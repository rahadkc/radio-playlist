import { cleanup, render } from '@testing-library/react'
import ListItem from '../index'

const props = {
  index: 1,
  item: { id: 1, name: 'Arman', value: 105 },
  activeIndex: 1,
  handleClick: () => {}
}

describe('<ListItem> component', () => {
  afterEach(cleanup)

  test('render ListItem component', () => {
    render(<ListItem {...props} />)
  })

  test('render item in the document', () => {
    const itemName = props?.item?.name
    const { queryByText } = render(<ListItem {...props} />)
    expect(queryByText(itemName)).toBeInTheDocument()
    expect(queryByText(itemName)).toMatchSnapshot()
  })
})
