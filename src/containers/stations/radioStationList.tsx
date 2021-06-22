import classNames from 'classnames'
import React from 'react'
import Container from '../../components/container'
import List from '../../components/list'
import Actions from '../../context/types/actionTypes'
import StationType from '../../context/types/stationType'
import commonStyles from '../../css/common.module.css'
import data from '../../data.json'
import useStationContext from '../../hook/useStationContext'
import styles from './stations.module.css'

export type RadioStationListProps = {}

const RadioStationList: React.FC<RadioStationListProps> = () => {
  const { dispatch }: any = useStationContext()
  const [loading, setLoading] = React.useState<boolean>(false)
  const [items, setItems] = React.useState<StationType[]>([])

  const [currentStation, setCurrentStation] = React.useState<StationType | null>(null)

  const handleItemClick = ({ item }: { index: number; item: StationType }) => {
    setCurrentStation(item)
  }

  React.useEffect(() => {
    let unmounted = false
    setLoading(true)
    const timer = setTimeout(() => {
      if (!unmounted) {
        setItems(data)
        setLoading(false)
      }
    }, 500)

    return () => {
      unmounted = true
      clearTimeout(timer)
    }
  }, [])

  React.useEffect(() => {
    if (dispatch) {
      dispatch({
        type: Actions._SET_STATION,
        payload: currentStation
      })
    }
  }, [currentStation])

  return (
    <Container classes={commonStyles.hFull}>
      <div className={classNames(styles.box, commonStyles.hFull, styles.scrollBox)}>
        <List data={items} loading={loading} onItemClick={handleItemClick} />
      </div>
    </Container>
  )
}

export default RadioStationList
