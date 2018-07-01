import styled from 'styled-components'

const ElapseBar = styled.div`
  width: ${props => 100 - props.widthPerc}%;
  height: 100%;
  background-color: red;
  transition: width 100ms ease-in-out;
`

export default ElapseBar
