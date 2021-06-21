import React from 'react'
import settings from '../../lib/settings'
import styles from './loading.module.css'

const Loading = () => {
  return <div className={styles.loading}>{settings.LOADING_TEXT}</div>
}

export default React.memo(Loading)
