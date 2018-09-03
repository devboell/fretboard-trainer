import React from 'react'
import pt from 'prop-types'

import { quizShape } from 'propShapes/quiz'

import TrainButton from './TrainButton'
import Wrapper from './Wrapper'

const TrainingControls = ({ selectedItem, onInitRunner, hasSelection }) =>
  <Wrapper>
    <TrainButton
      onClick={() => onInitRunner(selectedItem)}
      disabled={!hasSelection}
    >
      Train
    </TrainButton>
  </Wrapper>

TrainingControls.propTypes = {
  selectedItem: quizShape.isRequired,
  onInitRunner: pt.func.isRequired,
  hasSelection: pt.bool.isRequired,
}

export default TrainingControls
