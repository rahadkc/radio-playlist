import React from 'react'

export type IBoxProps = {
  children: React.ReactNode
  classes?: string | undefined | null
  style?: React.CSSProperties
}

const Box: React.FC<IBoxProps> = ({ children, classes, style }) => {
  return (
    <div style={style} className={`${classes}`}>
      {children}
    </div>
  )
}

export default Box
