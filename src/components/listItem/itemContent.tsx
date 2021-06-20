import React from 'react'
import styles from './list.module.css'

export type ItemContentProps = {
  name: string
  value: string | number
  style?: React.CSSProperties
}

const ItemContent: React.FC<ItemContentProps> = ({ name, value, style = {} }) => {
  return (
    <div style={style} className={styles.item}>
      <div className={styles.name}>{name}</div>
      <div className={styles.value}>{value}</div>
    </div>
  )
}

export default ItemContent
