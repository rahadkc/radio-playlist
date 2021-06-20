import React from 'react'
import styles from '../css/container.module.css'

export type IContainerProps = {
  children: React.ReactNode
  classes?: string | undefined | null
  style?: React.CSSProperties
}

const Container: React.FC<IContainerProps> = ({ children, classes = '', style = {} }) => {
  return (
    <div style={style} className={`${styles.container} ${classes}`}>
      {children}
    </div>
  )
}

export default Container
