import React from 'react'
import settings from '../../lib/settings'
import styles from './player.module.css'

export type NextProps = {
  onClick?: () => void
}

const Next: React.FC<NextProps> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className={styles.next}
      style={{
        background: `url(${process.env.PUBLIC_URL + '/css_sprites.png'})  -94px -10px`
      }}
    >
      {settings.NEXT}
    </div>
  )
}

export default Next
