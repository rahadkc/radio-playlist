import React from 'react'
import styles from './body.module.css'

export type IBodyProps = {
  children: React.ReactNode
  classes?: string | undefined | null
}

const Body: React.FC<IBodyProps> = ({ children, classes }) => {
  return <main className={`${styles.main} ${classes}`}>{children}</main>
}

export default Body
