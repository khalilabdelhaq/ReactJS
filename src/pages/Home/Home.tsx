import * as React from 'react'
import { useSelector } from 'react-redux'
import ItemComponent from '../../molecules/ItemComponent/ItemComponent'
import { RootState } from '../../redux/rootReducer'
import { Styles } from './Home.style'

const Home: React.FC<{}> = () => {
  const items = useSelector((state: RootState) => state.items.items)
  return (
    <>
      <Styles.Container>
        {items.map((item) => (
          <ItemComponent item={item}></ItemComponent>
        ))}
      </Styles.Container>
    </>
  )
}

export default Home
