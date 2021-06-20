import { cleanup, fireEvent, render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import settings from '../../../lib/settings'
import List from '../index'

const mockData: MockType[] = [
  { id: 1, name: 'Messi', value: 200.6 },
  { id: 2, name: 'C Ronaldo', value: '101.5' },
  { id: 3, name: 'Mbappe', value: 200 }
]

type MockType = {
  id: number
  name: string
  value: number | string
}

describe('<ListItem> Interaction', () => {
  const { name } = mockData[0]

  const handleClick = jest.fn()

  beforeEach(() => {
    jest.useFakeTimers()
  })
  afterEach(() => {
    // jest.runAllTimers()
    jest.useRealTimers()
    cleanup
  })

  test('<ListItem/player> Toggle Player component on click listItem', async () => {
    const { queryByText, getByText } = render(
      <List loading={false} data={mockData} onItemClick={handleClick} initialItemCount={3} />
    )

    expect(queryByText(name)).toBeInTheDocument()
    expect(queryByText(settings.NEXT)).not.toBeInTheDocument()

    userEvent.click(getByText(name))
    expect(handleClick).toHaveBeenCalled()
    expect(queryByText(settings.NEXT)).toBeInTheDocument()

    userEvent.click(getByText(name))
    expect(handleClick).toHaveBeenCalled()
    await waitFor(() => {
      expect(queryByText(settings.NEXT)).not.toBeInTheDocument()
    })
  })

  test('<ListItemContent> render List item with {listItemContent} prop component', async () => {
    const { getByText } = render(
      <List
        loading={false}
        data={mockData}
        listitemcontent={(_index: number, item: MockType) => <div>{item?.name}</div>}
        initialItemCount={3}
      />
    )
    await waitFor(() => {
      expect(getByText(name)).toBeInTheDocument()
    })
  })

  test('<Default list item> render List item without sending {listItemContent} prop', async () => {
    const element = render(<List loading={false} data={mockData} initialItemCount={3} />)
    await waitFor(() => {
      expect(element.queryByText(name)).toBeInTheDocument()
    })
  })

  test('<List item> click on list item', async () => {
    const element = render(
      <List loading={false} data={mockData} onItemClick={handleClick} initialItemCount={3} />
    )

    fireEvent.click(element.getByText(name))
    expect(handleClick).toHaveBeenCalled()
    await waitFor(() => {})
  })
})
