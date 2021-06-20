import classNames from 'classnames'
import React from 'react'
import styles from './container.module.css'

export type IContainerProps = {
  children: React.ReactNode
  classes?: string | undefined | null
  style?: React.CSSProperties
}

const Container: React.FC<IContainerProps> = ({ children, classes = '', style = {} }) => {
  const styleClasses = classNames(styles.container, classes)
  return (
    <div style={style} className={styleClasses}>
      {children}
    </div>
  )
}

export default Container
