import React from 'react'
import pt from 'prop-types'
import { quizShape } from 'propShapes/quiz'

import MultipleChoice from 'components/presentational/QuizView/MultipleChoice'
import FretboardPanel from 'components/presentational/QuizView/FretboardPanel'
import NamePanel from 'components/presentational/QuizView/NamePanel'
import StaffPanel from 'components/presentational/QuizView/StaffPanel'
import SoundPanel from 'components/presentational/QuizView/SoundPanel'
import Timer from 'components/presentational/QuizView/Timer'

import QuestionPanel from './QuestionPanel'
import PanelWrapper from './PanelWrapper'
import Wrapper from './Wrapper'

const modeComponents = {
  fretboard: FretboardPanel,
  name: NamePanel,
  staff: StaffPanel,
  sound: SoundPanel,
}

const questionPanel = (info, panelMode) => {
  const Component = modeComponents[panelMode.question]

  switch (panelMode.question) {
    case 'fretboard':
      return <Component locs={info.locs} />
    default:
      return (
        <QuestionPanel>
          <Component entity={info.entity} />
        </QuestionPanel>
      )
  }
}

const answerPanel = (info, panelMode, onSetAnswer, answers) => {
  const Component = modeComponents[panelMode.answer]
  switch (panelMode.answer) {
    case 'fretboard':
      return <Component
        answers={answers}
        locs={info.locs}
        clickAction={onSetAnswer}
      />
    default:
      return (
        <MultipleChoice
          {...{ Component }}
          choices={info.choices}
          answers={answers}
          clickAction={onSetAnswer}
        />
      )
  }
}

const QuizPanels = ({
  quiz,
  questionInfo,
  panelMode,
  onSetAnswer,
  answers,
  elapsedTime,
}) =>
  <Wrapper>
    <PanelWrapper>
      {questionPanel(questionInfo.question, panelMode)}
    </PanelWrapper>
    {quiz.useTimer &&
      <Timer
        time={quiz.time}
        elapsedTime={elapsedTime}
      />
    }
    <PanelWrapper>
      {answerPanel(questionInfo.answer, panelMode, onSetAnswer, answers)}
    </PanelWrapper>
  </Wrapper>


QuizPanels.propTypes = {
  quiz: quizShape.isRequired,
  questionInfo: pt.shape({}).isRequired,
  panelMode: pt.shape({}).isRequired,
  onSetAnswer: pt.func.isRequired,
  answers: pt.shape({}).isRequired,
  elapsedTime: pt.number.isRequired,
}


export default QuizPanels