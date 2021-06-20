import get from 'lodash.get'
import React from 'react'
import Body from '../../components/body'
import Footer from '../../components/footer'
import Header from '../../components/header'
import Wrapper from '../../components/wrapper/index'
import useStationContext from '../../hook/useStationContext'
import settings from '../../lib/settings'
import RadioStationList from './radioStationList'

export interface StationsProps {}

const Stations: React.FC<StationsProps> = () => {
  const { state } = useStationContext()
  const name = get(state, 'current_station.name', undefined)

  const footerProps = {
    title: settings.STATION_FOOTER_TITLE,
    name
  }

  return (
    <Wrapper>
      <Header title={settings.STATION_HEADER_TITLE} />
      <Body>
        <RadioStationList />
      </Body>
      <Footer {...footerProps} />
    </Wrapper>
  )
}

export default Stations
