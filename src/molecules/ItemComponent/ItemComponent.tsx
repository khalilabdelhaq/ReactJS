import * as React from 'react'
import { useState } from 'react'
import CardFC from '../../atoms/CardFC'
import { Item } from '../../redux/types'
import { Styles } from './ItemComponent.style'

interface Props {
  item: Item
}

const ItemComponent: React.FC<Props> = ({ item }) => {
  const [hide, setHide] = useState<Boolean>(false)
  return (
    <Styles.Container>
      {!hide && <CardFC src="source" />}
      <Styles.InfoContainer onClick={() => setHide(true)}>
        <Styles.Title>{item.title}</Styles.Title>
        {item.category && <Styles.Type>{item.category.name}</Styles.Type>}
        <Styles.Adress>{item.adress}</Styles.Adress>
        {item.ville && <Styles.Adress>{item.ville.name}</Styles.Adress>}
      </Styles.InfoContainer>
    </Styles.Container>
  )
}

export default ItemComponent
