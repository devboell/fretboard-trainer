import React from 'react'
import Fretboard from 'components/Fretboard'
import Wrapper from './Wrapper'

const tuning = ['E2', 'A2', 'D3', 'G3', 'B3', 'E4']
const nrOfFrets = 12

const App = () => (
  <Wrapper>
    <Fretboard
      {...{ tuning, nrOfFrets }}
    />
  </Wrapper>
)

export default App
