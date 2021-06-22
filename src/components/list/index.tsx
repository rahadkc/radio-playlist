import React from 'react'
import { Virtuoso } from 'react-virtuoso'
import settings from '../../lib/settings'
import ListItem from '../listItem'
import Loading from '../loading'
import NoData from '../noData'

interface Props<T> {
  children?: (item: T) => React.ReactNode
  data: T[]
  loading: boolean
  onItemClick?: ({ index, item }: { index: number; item: any }) => void
  noDataText?: string
  listitemcontent?: any
  alignToBottom?: boolean
  firstItemIndex?: number
  initialItemCount?: number
  initialTopMostItemIndex?: number
  isScrolling?: (isScrolling: boolean) => void
}

const List = <T extends {}>({
  data,
  loading,
  onItemClick,
  listitemcontent,
  noDataText,
  alignToBottom,
  firstItemIndex,
  initialItemCount = 10,
  initialTopMostItemIndex,
  isScrolling
}: Props<T>) => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null)
  const virtuoso: any = React.useRef<HTMLDivElement>(null)
  const noDataContent = noDataText || settings.NO_DATA_AVAILABLE_TEXT

  const handleItemClick = ({ index, item }: { index: number; item: any }) => {
    const _index: null | number = index === activeIndex ? null : index
    const _item: T | null = index === activeIndex ? null : item

    setActiveIndex(_index)
    onItemClick && onItemClick({ index, item: _item })
    virtuoso.current?.scrollToIndex({
      index: _index,
      align: 'top',
      behavior: 'auto'
    })
  }

  if (!loading && !data.length) {
    return <NoData content={noDataContent} />
  }

  if (loading) {
    return <Loading />
  }

  const listProps = {
    data,
    itemContent: (index: number, item: any) => {
      if (listitemcontent) {
        return listitemcontent(index, item)
      }
      return (
        <ListItem
          index={index}
          item={item}
          activeIndex={activeIndex}
          handleClick={handleItemClick}
        />
      )
    },
    ...(alignToBottom && { alignToBottom }),
    ...(firstItemIndex && { firstItemIndex }),
    ...(initialItemCount && { initialItemCount }),
    ...(initialTopMostItemIndex && { initialTopMostItemIndex }),
    ...(isScrolling && { isScrolling })
  }

  return <Virtuoso {...listProps} />
}

export default React.memo(List)
