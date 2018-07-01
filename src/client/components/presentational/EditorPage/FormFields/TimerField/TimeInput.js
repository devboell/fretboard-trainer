import styled from 'styled-components'
import InputNumber from 'components/presentational/EditorPage/Form/InputNumber'

const TimeInput = styled(InputNumber)`
  outline: none;
  outline-style: none;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: solid black 1px;
  box-shadow: 0 0 0px 1000px white inset;
  width: 30px;
  margin-right: 5px;
  padding-left: 5px;

  :: placeholder {
    font-style: italic;
    color: lightgray;
  }
`

export default TimeInput
