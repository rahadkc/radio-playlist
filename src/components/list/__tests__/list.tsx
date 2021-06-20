import { cleanup, render, screen } from '@testing-library/react'
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

const text = 'Mock no data'

describe('<List>', () => {
  afterEach(cleanup)

  test('render List component', () => {
    const element = render(<List loading={false} data={mockData} />)
    expect(screen.queryByText(/loading/i)).not.toBeInTheDocument()
    expect(element).toMatchSnapshot()
  })

  test('<Loading> show when loading is true', () => {
    const element = render(<List loading={true} data={mockData} />)
    expect(screen.queryByText(/loading/i)).toBeInTheDocument()
    expect(element).toMatchSnapshot()
  })

  test('<noData> component will not show with atleast one item length', () => {
    const element = render(<List loading={false} data={mockData} noDataText={text} />)
    expect(element.queryByText(text)).not.toBeInTheDocument()
    expect(element).toMatchSnapshot()
  })

  test('<NoData> change component text', () => {
    const element = render(<List loading={false} data={[]} noDataText={text} />)
    expect(element.queryByText(text)).toBeInTheDocument()
    expect(element).toMatchSnapshot()
  })

  test('<noData> show text without noData prop', () => {
    const element = render(<List loading={false} data={[]} />)
    expect(element.queryByText(settings.NO_DATA_AVAILABLE_TEXT)).toBeInTheDocument()
    expect(element).toMatchSnapshot()
  })
})
