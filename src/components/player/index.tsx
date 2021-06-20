import classNames from 'classnames'
import React from 'react'
import commonStyles from '../../css/common.module.css'
import Next from './next'
import styles from './player.module.css'
import Preview from './preview'
import Previous from './previous'

export type PlayerProps = {
  prevClick?: () => void
  nextClick?: () => void
}

const Player: React.FC<PlayerProps> = ({ prevClick, nextClick }) => {
  const classes = classNames(commonStyles.grid, commonStyles.gridVcenter, styles.player)
  return (
    <div className={classes}>
      <Previous onClick={prevClick} />
      <Preview />
      <Next onClick={nextClick} />
    </div>
  )
}

export default Player
