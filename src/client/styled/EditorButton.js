import styled from 'styled-components'

const EditorButton = styled.button`
  width: 80px;
  height: 30px;
  
  text-align: center;
  vertical-align: middle;

  cursor: pointer;
  background-color: rgb(52, 152, 219);
  color: white;

  border-radius: 5px;
  border: none;
  outline: 0;

  :disabled {
    background-color: gray;
  }
`

export default EditorButton
