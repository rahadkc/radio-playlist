import React from 'react'
import settings from '../../lib/settings'
import styles from './player.module.css'

export type PreviousProps = {
  onClick?: () => any
}

const Previous: React.FC<PreviousProps> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className={styles.prev}
      style={{
        background: `url(${process.env.PUBLIC_URL + '/css_sprites.png'})  -10px -10px`
      }}
    >
      {settings.PREVIOUS}
    </div>
  )
}

export default Previous
