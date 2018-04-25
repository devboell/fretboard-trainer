import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  height: 90%;
  justify-content: center;
  align-items: center;
  background-color: rgb(248,248,248);
`
const UnselectedMessage = () =>
  <Div>
    Select a quiz, or create a new one.
  </Div>

export default UnselectedMessage
