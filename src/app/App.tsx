import Stations from '../containers/stations'
import { StationProvider } from '../context'
import './App.css'

function App() {
  return (
    <StationProvider>
      <div className="App">
        <Stations />
      </div>
    </StationProvider>
  )
}

export default App
