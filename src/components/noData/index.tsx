import React from 'react'
import styles from './nodata.module.css'

export type NoDataProps = {
  content: string | JSX.Element
}

const NoData: React.FC<NoDataProps> = ({ content }) => {
  const dataContent =
    typeof content === 'string' ? <p className={styles.para}>{content}</p> : content

  return <div className={styles.noData}>{dataContent}</div>
}

export default NoData
