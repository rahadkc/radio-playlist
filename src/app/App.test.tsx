import { cleanup, render } from '@testing-library/react'
import React from 'react'
import { StationProvider } from '../context/index'
import App from './App'

describe('App component', () => {
  afterEach(cleanup)

  test('render App component without crash', () => {
    render(<App />)
  })

  test('render App with context Provider', () => {
    render(
      <StationProvider>
        <App />
      </StationProvider>
    )
  })
})
