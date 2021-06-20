import React from 'react'
import Body from '../../components/body'
import Footer from '../../components/footer'
import Header from '../../components/header'
import settings from '../../lib/settings'

export interface StationsProps {}

const Stations: React.FC<StationsProps> = () => {
  const footerProps = {
    title: settings.STATION_FOOTER_TITLE
  }

  return (
    <>
      <Header title={settings.STATION_HEADER_TITLE} />
      <Body>
        <div>list</div>
      </Body>
      <Footer {...footerProps} />
    </>
  )
}

export default Stations
