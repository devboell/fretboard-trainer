import React from 'react'
import pt from 'prop-types'

import { quizShape } from 'propShapes/quiz'

import QuizPanels from 'components/QuizView/QuizPanels'
import PanelModeSelector from './PanelModeSelector'
import StartButton from './StartButton'
import Wrapper from './Wrapper'


const QuizView = ({
  quiz,
  question,
  onStartRunner,
  selectedPanelModeIdx,
  onSelectPanelModeIdx,
  onSetAnswer,
  answers,
}) =>
  <Wrapper>
    <p>{quiz.name}</p>
    <PanelModeSelector
      {...{ selectedPanelModeIdx, onSelectPanelModeIdx }}
      panelModes={quiz.panelModes}
    />
    {question &&
      <QuizPanels
        questionInfo={question.panels}
        panelMode={quiz.panelModes[selectedPanelModeIdx]}
        onSetAnswer={onSetAnswer}
        answers={answers}
      />
    }
    <StartButton onClick={onStartRunner}>
      Start
    </StartButton>
  </Wrapper>

QuizView.propTypes = {
  quiz: quizShape.isRequired,
  question: pt.shape({}),
  onStartRunner: pt.func.isRequired,
  selectedPanelModeIdx: pt.number.isRequired,
  onSelectPanelModeIdx: pt.func.isRequired,
  onSetAnswer: pt.func.isRequired,
  answers: pt.shape({}).isRequired,
}

QuizView.defaultProps = {
  question: undefined,
}


export default QuizView
