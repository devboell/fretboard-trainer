import React from 'react'
import pt from 'prop-types'

import { quizShape } from 'propShapes/quiz'
import PanelModeSelector from 'components/presentational/QuizView/PanelModeSelector'

const QuizSettings = ({
  quiz,
  selectedPanelModeIdx,
  onSelectPanelModeIdx,
}) =>
  <div>
    <p>{quiz.name}</p>
    <PanelModeSelector
      {...{ selectedPanelModeIdx, onSelectPanelModeIdx }}
      panelModes={quiz.panelModes}
    />
  </div>

QuizSettings.propTypes = {
  quiz: quizShape.isRequired,
  selectedPanelModeIdx: pt.number.isRequired,
  onSelectPanelModeIdx: pt.func.isRequired,
}

export default QuizSettings
