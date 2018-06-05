import React from 'react'
import pt from 'prop-types'
import { cond, contains, T, always, __ } from 'ramda'
import Choice from './Choice'
import ChoiceStatus from './ChoiceStatus'
import Wrapper from './Wrapper'
import Button from './Button'


const statusSymbol = {
  correct: '\u2714',
  incorrect: '\u2718',
  unselected: '\u00A0',
}

const MultipleChoice = ({
  Component,
  choices,
  clickAction,
  answers,
}) => {
  const getStatus = cond([
    [contains(__, answers.correct), always('correct')],
    [contains(__, answers.incorrect), always('incorrect')],
    [T, always('unselected')],
  ])

  return (
    <Wrapper>
      {choices.map((choice) => {
        const status = getStatus(choice)
        return (
          <Choice key={choice.name}>
            <Button onClick={() => clickAction(choice)}>
              <Component entity={choice} isChoice />
            </Button>
            <ChoiceStatus status={status}>
              {statusSymbol[status]}
            </ChoiceStatus>
          </Choice>
        )
      })}
    </Wrapper>
  )
}


MultipleChoice.propTypes = {
  Component: pt.func.isRequired,
  choices: pt.arrayOf(pt.shape({})).isRequired,
  clickAction: pt.func.isRequired,
  answers: pt.shape({}).isRequired,
}

export default MultipleChoice
