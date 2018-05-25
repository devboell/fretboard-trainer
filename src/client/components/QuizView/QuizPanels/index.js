import React from 'react'
import pt from 'prop-types'

import MultipleChoice from 'components/QuizView/MultipleChoice'
import FretboardPanel from 'components/QuizView/FretboardPanel'
import NamePanel from 'components/QuizView/NamePanel'
import StaffPanel from 'components/QuizView/StaffPanel'
import SoundPanel from 'components/QuizView/SoundPanel'

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
  questionInfo,
  panelMode,
  onSetAnswer,
  answers,
}) =>
  <Wrapper>
    <PanelWrapper>
      {questionPanel(questionInfo.question, panelMode)}
    </PanelWrapper>
    <PanelWrapper>
      {answerPanel(questionInfo.answer, panelMode, onSetAnswer, answers)}
    </PanelWrapper>
  </Wrapper>


QuizPanels.propTypes = {
  questionInfo: pt.shape({}).isRequired,
  panelMode: pt.shape({}).isRequired,
  onSetAnswer: pt.func.isRequired,
  answers: pt.shape({}).isRequired,
}


export default QuizPanels
