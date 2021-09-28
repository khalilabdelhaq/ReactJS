import * as React from 'react'
import { Styles } from '../Card.style'
type Props = {
  src: string
}
const CardFC: React.FC<Props> = ({ src }) => {
  const [value, setValue] = React.useState('value du state')

  React.useEffect(() => {
    console.log("useEffect without dependencies')")
  })

  React.useEffect(() => {
    console.log("console.log('[CardFC] - [useEffect] - Equivalent de componentDidMount()')")
  }, [])

  React.useEffect(() => {
    console.log("console.log('[CardFC] - [useEffect] - Equivalent de componentDidUpdate()')")
    return () => {
      console.log("console.log('[CardFC] - [useEffect] - Equivalent de componentWillUnmount()')")
    }
  }, [value])

  return (
    <Styles.ImgContainer onClick={() => setValue('state changé')}>
      {`props : ${src} , state:${value}`}
    </Styles.ImgContainer>
  )
}

export default CardFC
