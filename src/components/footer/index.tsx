import React from 'react'
import Container from '../container'
import styles from './footer.module.css'

export type FooterProps = {
  title: string
  name: string | undefined
}

export const Footer: React.FC<FooterProps> = ({ title, name }) => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.box}>
          {name && (
            <>
              <h4 className={styles.title}>{title}</h4>
              <div className={styles.name}>{name}</div>
            </>
          )}
        </div>
      </Container>
    </footer>
  )
}

export default Footer
