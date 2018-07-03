import React from 'react'
import pt from 'prop-types'

import { quizShape } from 'propShapes/quiz'
import PanelModeSelector from 'components/presentational/QuizView/PanelModeSelector'
import FieldWrapper from './FieldWrapper'
import FieldLabel from './FieldLabel'
import FieldContent from './FieldContent'
import Wrapper from './Wrapper'

const QuizSettings = ({
  quiz,
  selectedPanelModeIdx,
  onSelectPanelModeIdx,
}) =>
  <Wrapper>
    <FieldWrapper>
      <FieldLabel>name:</FieldLabel>
      <FieldContent>{quiz.name}</FieldContent>
    </FieldWrapper>
    <FieldWrapper>
      <FieldLabel>panel modes:</FieldLabel>
      <FieldContent>
        <PanelModeSelector
          {...{ selectedPanelModeIdx, onSelectPanelModeIdx }}
          panelModes={quiz.panelModes}
        />
      </FieldContent>
    </FieldWrapper>
  </Wrapper>

QuizSettings.propTypes = {
  quiz: quizShape.isRequired,
  selectedPanelModeIdx: pt.number.isRequired,
  onSelectPanelModeIdx: pt.func.isRequired,
}

export default QuizSettings
