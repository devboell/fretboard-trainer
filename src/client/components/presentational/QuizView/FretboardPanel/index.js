import React from 'react'
import pt from 'prop-types'
import Fretboard from 'react-fretboard'

import Wrapper from './Wrapper'

const theme = {
  statusMap: {
    correct: 'green',
    incorrect: 'red',
  },
}

const locObj = status => answer => ({
  loc: answer, status,
})

const FretboardPanel = ({
  locs,
  fretboardSettings,
  answers,
  clickAction,
}) => {
  const answerLocs = answers
    ? [
      ...answers.correct.map(locObj('correct')),
      ...answers.incorrect.map(locObj('incorrect')),
    ]
    : []
  const selectedLocations = [...locs, ...answerLocs]
  const fretboardClick = ({ loc }) => clickAction(loc)

  return (
    <Wrapper>
      <Fretboard
        selectedLocations={selectedLocations}
        clickAction={fretboardClick}
        theme={theme}
        {...fretboardSettings}
      />
    </Wrapper>
  )
}


FretboardPanel.propTypes = {
  locs: pt.arrayOf(pt.shape({})).isRequired,
  fretboardSettings: pt.shape({}),
  answers: pt.shape({}),
  clickAction: pt.func,
}

FretboardPanel.defaultProps = {
  fretboardSettings: undefined,
  answers: undefined,
  clickAction: undefined,
}

export default FretboardPanel
