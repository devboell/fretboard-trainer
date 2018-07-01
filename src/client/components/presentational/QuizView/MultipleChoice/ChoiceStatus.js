import styled from 'styled-components'

const statusColors = {
  correct: 'green',
  incorrect: 'red',
  unselected: 'white',
}

export default styled.div`
  margin-top: 5px;
  font-size: 20px;
  color: ${props => statusColors[props.status]};
`
