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
        skinType="boxes"
        showOctaves
        selectedNotes={['C4']}
      />
    </Wrapper>
    <Wrapper>
      <Fretboard
        {...{ tuning, nrOfFrets }}
        skinType="strings"
        selectedNotes={['C4']}
      />
    </Wrapper>
    <Wrapper>
      <Fretboard
        {...{ tuning, nrOfFrets }}
        skinType="boxes"
        showNotes={false}
        selectedNotes={['C']}
      />
    </Wrapper>
    <Wrapper>
      <Fretboard
        {...{ tuning, nrOfFrets }}
        skinType="strings"
        showNotes={false}
        showOctaves
        selectedNotes={['C']}
      />
    </Wrapper>
    <Wrapper>
      <Fretboard
        {...{ tuning, nrOfFrets }}
        skinType="boxes"
        selectedNotes={['C4', 'F4']}
      />
    </Wrapper>
    <Wrapper>
      <Fretboard
        {...{ tuning, nrOfFrets }}
        skinType="strings"
        selectedNotes={['C4', 'F4']}
      />
    </Wrapper>
    <Wrapper>
      <Fretboard
        {...{ tuning, nrOfFrets }}
        skinType="boxes"
        showNotes={false}
        selectedNotes={['C', 'F']}
      />
    </Wrapper>
    <Wrapper>
      <Fretboard
        {...{ tuning, nrOfFrets }}
        skinType="strings"
        showNotes={false}
        selectedNotes={['C', 'F']}
      />
    </Wrapper>
  </div>
)

export default App
