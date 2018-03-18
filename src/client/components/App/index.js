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
      />
    </Wrapper>
    <Wrapper>
      <Fretboard
        {...{ tuning, nrOfFrets }}
        type="strings"
      />
    </Wrapper>
    <Wrapper>
      <Fretboard
        {...{ tuning, nrOfFrets }}
        type="boxes"
        showNotes={false}
      />
    </Wrapper>
    <Wrapper>
      <Fretboard
        {...{ tuning, nrOfFrets }}
        type="strings"
        showNotes={false}
      />
    </Wrapper>
    <Wrapper>
      <Fretboard
        {...{ tuning, nrOfFrets }}
        type="boxes"
        isHighlighted
      />
    </Wrapper>
    <Wrapper>
      <Fretboard
        {...{ tuning, nrOfFrets }}
        type="strings"
        isHighlighted
      />
    </Wrapper>
    <Wrapper>
      <Fretboard
        {...{ tuning, nrOfFrets }}
        type="boxes"
        showNotes={false}
        isHighlighted
      />
    </Wrapper>
    <Wrapper>
      <Fretboard
        {...{ tuning, nrOfFrets }}
        type="strings"
        showNotes={false}
        isHighlighted
      />
    </Wrapper>
  </div>
)

export default App
