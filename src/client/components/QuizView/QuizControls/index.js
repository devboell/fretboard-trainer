import React from 'react'
import pt from 'prop-types'

import { statusMap } from 'components/Runner/reducer'
import Wrapper from './Wrapper'
import StartButton from './StartButton'
import StopButton from './StopButton'

const QuizControls = ({
  onStartQuiz,
  onStopQuiz,
  onResetRunner,
  status,
  handleExitFullscreen,
  isFullscreenEnabled,
}) => {
  const exitQuiz = () => {
    onResetRunner()
    isFullscreenEnabled && handleExitFullscreen()
  }

  return (
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
      <StopButton onClick={exitQuiz}>
          Exit
      </StopButton>
    </Wrapper>
  )
}


QuizControls.propTypes = {
  onStartQuiz: pt.func.isRequired,
  onStopQuiz: pt.func.isRequired,
  onResetRunner: pt.func.isRequired,
  status: pt.string.isRequired,
  handleExitFullscreen: pt.func,
  isFullscreenEnabled: pt.bool.isRequired,
}

QuizControls.defaultProps = {
  handleExitFullscreen: undefined,
}

export default QuizControls
