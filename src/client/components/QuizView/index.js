import React from 'react'
import pt from 'prop-types'

import { quizShape } from 'propShapes/quiz'

import QuizPanels from 'components/QuizView/QuizPanels'
import QuizControls from 'components/QuizView/QuizControls'
import PanelModeSelector from 'components/QuizView/PanelModeSelector'
import Wrapper from './Wrapper'


const QuizView = ({
  quiz,
  question,
  onStartQuiz,
  onStopQuiz,
  selectedPanelModeIdx,
  onSelectPanelModeIdx,
  onSetAnswer,
  answers,
  status,
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
    <QuizControls
      {...{ onStartQuiz, onStopQuiz, status }}
    />
  </Wrapper>

QuizView.propTypes = {
  quiz: quizShape.isRequired,
  question: pt.shape({}),
  onStartQuiz: pt.func.isRequired,
  onStopQuiz: pt.func.isRequired,
  selectedPanelModeIdx: pt.number.isRequired,
  onSelectPanelModeIdx: pt.func.isRequired,
  onSetAnswer: pt.func.isRequired,
  answers: pt.shape({}).isRequired,
  status: pt.string,
}

QuizView.defaultProps = {
  question: undefined,
  status: undefined,
}


export default QuizView
