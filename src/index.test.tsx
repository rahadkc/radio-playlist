import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/App'

jest.mock('react-dom', () => ({ render: jest.fn() }))

describe('Index - Application root', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div')
    div.id = 'root'
    document.body.appendChild(div)
    require('./index.tsx')
    expect(ReactDOM.render).toHaveBeenCalledWith(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      div
    )
  })
})
