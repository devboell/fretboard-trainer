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
  loc: answer.loc, status,
})

const FretboardPanel = ({ locs, answers, clickAction }) => {
  const selectedLocations = answers
    ? [
      ...answers.correct.map(locObj('correct')),
      ...answers.incorrect.map(locObj('incorrect')),
    ]
    : locs
  return (
    <Wrapper>
      <Fretboard
        selectedLocations={selectedLocations}
        clickAction={clickAction}
        theme={theme}
      />
    </Wrapper>
  )
}


FretboardPanel.propTypes = {
  locs: pt.arrayOf(pt.shape({})).isRequired,
  answers: pt.shape({}),
  clickAction: pt.func,
}

FretboardPanel.defaultProps = {
  answers: undefined,
  clickAction: undefined,
}

export default FretboardPanel
