import * as React from 'react'
import { Styles } from './CardFC.style'
type Props = {
  src: string
}
const CardFC: React.FC<Props> = ({ src }) => {
  const [value, setValue] = React.useState('value du state')

  React.useEffect(() => {
    console.log("useEffect without dependencies')")
  })

  React.useEffect(() => {
    console.log(
      "console.log('[CardFC] - [useEffect] - Equivalent de componentDidMount()')"
    )
    return () => {
      console.log(
        "console.log('[CardFC] - [useEffect] - Equivalent de componentWillUnmount()')"
      )
    }
  }, []) // Empty dependency array indicates the effect should only run once

  React.useEffect(() => {
    console.log(
      "console.log('[CardFC] - [useEffect] - Equivalent de componentDidUpdate()')"
    )
    return () => {
      console.log(
        "console.log('[CardFC] - [useEffect] - Equivalent de componentWillUnmount()')"
        // cleans up effects from the previous render before running the effects next time.”
      )
    }
  }, [value])

  return (
    <Styles.ImgContainer onClick={() => setValue('state changé')}>
      {`props : ${src} , state:${value}`}
    </Styles.ImgContainer>
  )
}

export default CardFC
