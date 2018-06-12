import React from 'react'
import pt from 'prop-types'

import { statusMap } from 'components/Runner/reducer'
import Wrapper from './Wrapper'
import StartButton from './StartButton'
import StopButton from './StopButton'

const QuizControls = ({
  onStartQuiz,
  onStopQuiz,
  status,
}) =>
  <Wrapper>
    {status === statusMap.READY
      ?
        <StartButton onClick={onStartQuiz}>
          Start
        </StartButton>
      :
        <StopButton onClick={onStopQuiz}>
          Stop
        </StopButton>
    }
  </Wrapper>


QuizControls.propTypes = {
  onStartQuiz: pt.func.isRequired,
  onStopQuiz: pt.func.isRequired,
  status: pt.string.isRequired,
}


export default QuizControls
