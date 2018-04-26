import styled from 'styled-components'

const InputText = styled.input`
  margin-left: 10px;
  outline: none;
  outline-style: none;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: solid black 1px;
  box-shadow: 0 0 0px 1000px white inset;

  :: placeholder {
    font-style: italic;
    color: lightgray;
  }
`

export default InputText
