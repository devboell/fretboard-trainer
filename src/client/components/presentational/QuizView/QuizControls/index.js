import React from 'react'
import pt from 'prop-types'

import { statusMap } from 'components/containers/Runner/reducer'
import Wrapper from './Wrapper'
import StartButton from './StartButton'
import StopButton from './StopButton'
import ExitButton from './ExitButton'

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
      <ExitButton onClick={exitQuiz}>
          Exit
      </ExitButton>
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
