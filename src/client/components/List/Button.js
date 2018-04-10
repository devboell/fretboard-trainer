import styled from 'styled-components'

const Button = styled.button`
  text-align: center;
  vertical-align: center;
  width: 100%;
  cursor: pointer;
  height: 100%;
  border-radius: 3px;
  background-color: ${props => (props.isSelected ? 'orange' : 'rgb(248,248,248)')};
  border: none;
  outline: 0;
`

export default Button
