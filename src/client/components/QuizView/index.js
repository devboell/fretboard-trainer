import React from 'react'
import pt from 'prop-types'

import { quizShape } from 'propShapes/quiz'
import { statusMap } from 'components/Runner/reducer'

import QuizInfo from 'components/QuizView/QuizInfo'
import QuizPanels from 'components/QuizView/QuizPanels'
import QuizControls from 'components/QuizView/QuizControls'
import Wrapper from './Wrapper'


const QuizView = ({
  quiz,
  question,
  onStartQuiz,
  onStopQuiz,
  onResetRunner,
  selectedPanelModeIdx,
  onSelectPanelModeIdx,
  onSetAnswer,
  answers,
  status,
  elapsedTime,
  handleExitFullscreen,
  isFullscreenEnabled,
}) =>
  <Wrapper>
    <QuizControls
      {...{
        onStartQuiz,
        onStopQuiz,
        onResetRunner,
        status,
        handleExitFullscreen,
        isFullscreenEnabled,
      }}
    />
    {status === statusMap.READY
      ? <QuizInfo
        {...{ quiz, selectedPanelModeIdx, onSelectPanelModeIdx }}
      />
      : <QuizPanels
        questionInfo={question.panels}
        quiz={quiz}
        panelMode={quiz.panelModes[selectedPanelModeIdx]}
        onSetAnswer={onSetAnswer}
        answers={answers}
        elapsedTime={elapsedTime}
      />
    }
  </Wrapper>

QuizView.propTypes = {
  quiz: quizShape.isRequired,
  question: pt.shape({}),
  onStartQuiz: pt.func.isRequired,
  onStopQuiz: pt.func.isRequired,
  onResetRunner: pt.func.isRequired,
  selectedPanelModeIdx: pt.number.isRequired,
  onSelectPanelModeIdx: pt.func.isRequired,
  onSetAnswer: pt.func.isRequired,
  answers: pt.shape({}).isRequired,
  status: pt.string,
  elapsedTime: pt.number.isRequired,
  handleExitFullscreen: pt.func.isRequired,
  isFullscreenEnabled: pt.bool,
}

QuizView.defaultProps = {
  question: undefined,
  status: undefined,
  isFullscreenEnabled: false,
}


export default QuizView
