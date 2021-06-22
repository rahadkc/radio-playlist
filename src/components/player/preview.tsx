import React from 'react'
import styles from './player.module.css'

export type IPreviewProps = {
  url?: string
  width?: string
}

const Preview: React.FC<IPreviewProps> = ({ url = 'radio-n.png', width = '190px' }) => {
  return (
    <div className={styles.preview}>
      <img width={width} src={`${process.env.PUBLIC_URL}/${url}`} />
    </div>
  )
}

export default React.memo(Preview)
