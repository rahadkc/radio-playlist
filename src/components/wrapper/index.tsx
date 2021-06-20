import React from 'react'
import styles from './wrapper.module.css'

export type IWrapperProps = {
  children: React.ReactNode
  classes?: string | undefined | null
  style?: React.CSSProperties
}

const Wrapper: React.FC<IWrapperProps> = ({ children, classes, style }) => {
  return (
    <div style={style} className={`${styles.wrapper} ${classes}`}>
      {children}
    </div>
  )
}

export default Wrapper
