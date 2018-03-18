import React from 'react'
import Fretboard from 'components/Fretboard'
import Wrapper from './Wrapper'

const tuning = ['E2', 'A2', 'D3', 'G3', 'B3', 'E4']
const nrOfFrets = 12

const App = () => (
  <div>
    <Wrapper>
      <Fretboard
        {...{ tuning, nrOfFrets }}
        type="boxes"
        selectedNotes={['C4']}
      />
    </Wrapper>
    <Wrapper>
      <Fretboard
        {...{ tuning, nrOfFrets }}
        type="strings"
        selectedNotes={['C4']}
      />
    </Wrapper>
    <Wrapper>
      <Fretboard
        {...{ tuning, nrOfFrets }}
        type="boxes"
        showNotes={false}
        selectedNotes={['C']}
      />
    </Wrapper>
    <Wrapper>
      <Fretboard
        {...{ tuning, nrOfFrets }}
        type="strings"
        showNotes={false}
        selectedNotes={['C']}
      />
    </Wrapper>
    <Wrapper>
      <Fretboard
        {...{ tuning, nrOfFrets }}
        type="boxes"
        selectedNotes={['C4', 'F4']}
      />
    </Wrapper>
    <Wrapper>
      <Fretboard
        {...{ tuning, nrOfFrets }}
        type="strings"
        selectedNotes={['C4', 'F4']}
      />
    </Wrapper>
    <Wrapper>
      <Fretboard
        {...{ tuning, nrOfFrets }}
        type="boxes"
        showNotes={false}
        selectedNotes={['C', 'F']}
      />
    </Wrapper>
    <Wrapper>
      <Fretboard
        {...{ tuning, nrOfFrets }}
        type="strings"
        showNotes={false}
        selectedNotes={['C', 'F']}
      />
    </Wrapper>
  </div>
)

export default App
