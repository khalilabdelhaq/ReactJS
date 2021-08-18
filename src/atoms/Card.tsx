import React, { Component } from 'react'
import { Styles } from './Card.style'

interface Props {
  src?: string
}
interface State {
  value: string
}
class Card extends Component<Props, State> {
  constructor(props: Props) {
    console.log('Card constructor')
    super(props)
    this.state = { value: 'valeur du state' }
  }
  componentDidMount() {
    console.log('Card did mount')
  }
  componentDidUpdate() {
    console.log('Card did update')
  }
  componentWillUnmount() {
    console.log('Card will unmout')
  }
  shouldComponentUpdate(nextProps: Props, nextState: State) {
    return this.state.value !== nextState.value
  }

  render() {
    console.log('Card did render')
    return (
      <Styles.ImgContainer onClick={() => this.setState({ value: 'state changé' })}>
        {`props : ${this.props.src} , state:${this.state.value}`}{' '}
      </Styles.ImgContainer>
    )
  }
}

export default Card
