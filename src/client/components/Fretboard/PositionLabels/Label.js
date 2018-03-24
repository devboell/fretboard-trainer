import styled from 'styled-components'

const Label = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: ${props => props.width}%;
  font-size: ${props => props.theme.fontSize}px;
`

export default Label