import { AnimatePresence, motion, Variants } from 'framer-motion'
import React from 'react'
import StationType from '../../context/types/stationType'
import Player from '../player/index'
import ItemContent from './itemContent'

export type ListItemProps = {
  index: number
  item: StationType
  activeIndex: number | null
  handleClick: ({ index, item }: { index: number; item: StationType }) => void
}

const containerVariants: Variants = {
  open: {
    height: 'auto',
    opacity: 1,
    transition: {
      delayChildren: 0.01
    }
  },
  collapsed: {
    height: 0,
    opacity: 0,
    transition: {
      when: 'afterChildren'
    }
  }
}

const childVariants: Variants = {
  open: {
    opacity: 1
  },
  collapsed: {
    opacity: 0
  }
}

const ListItem: React.FC<ListItemProps> = ({ index, item, activeIndex, handleClick }) => {
  return (
    <>
      <AnimatePresence initial={false}>
        {index === activeIndex && (
          <motion.div
            key="content"
            variants={containerVariants}
            initial="collapsed"
            animate="open"
            exit="collapsed"
          >
            <motion.div variants={childVariants}>
              <Player nextClick={() => {}} prevClick={() => {}} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div onClick={() => handleClick({ index, item })}>
        <ItemContent {...item} />
      </div>
    </>
  )
}

export default React.memo(ListItem)
