import React from 'react'
import commonStyles from '../../css/common.module.css'
import Container from '../container'
import styles from './header.module.css'

export type HeaderProps = {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header>
      <Container>
        <div className={styles.box}>
          <div className={commonStyles.grid}>
            <div
              className={styles.backButton}
              style={{
                background: `url(${process.env.PUBLIC_URL + '/css_sprites.png'})  -74px -94px `
              }}
            >
              &lt;
            </div>
            <div className={styles.title}>{title}</div>
            <div
              className={styles.stopButton}
              style={{
                background: `url(${process.env.PUBLIC_URL + '/css_sprites.png'})  -4px -94px`
              }}
            >
              stop
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
