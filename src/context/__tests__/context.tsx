import { cleanup, render, screen, waitFor } from '@testing-library/react'
import Stations from '../../containers/stations'
import settings from '../../lib/settings'
import { StationProvider } from '../index'

describe('<Context>', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })
  afterEach(() => {
    jest.useRealTimers()
    cleanup
  })

  test('when page is initialized', () => {
    const { queryByText, getByText } = render(
      <StationProvider>
        <Stations />
      </StationProvider>
    )
    expect(getByText(settings.STATION_HEADER_TITLE)).toBeInTheDocument()
    expect(getByText(settings.LOADING_TEXT)).toBeInTheDocument()
    expect(queryByText(settings.STATION_FOOTER_TITLE)).not.toBeInTheDocument()
    expect(screen).toMatchSnapshot()
  })

  test('render list items after Loading state false', async () => {
    const { queryByText, container } = render(
      <StationProvider>
        <Stations />
      </StationProvider>
    )
    expect(queryByText(settings.LOADING_TEXT)).toBeInTheDocument()

    await waitFor(() => expect(queryByText(settings.LOADING_TEXT)).not.toBeInTheDocument())
    await waitFor(() => expect(container.getElementsByClassName('item')).toBeTruthy())
    await waitFor(() => expect(container.getElementsByClassName('player')).toHaveLength(0))
  })
})
