import React from 'react'
import pt from 'prop-types'
import { quizShape } from 'propShapes/quiz'
import { statusMap } from 'components/containers/Runner/reducer'
import Runner from 'components/containers/Runner'
import Wrapper from './Wrapper'
import FieldWrapper from './FieldWrapper'
import FieldLabel from './FieldLabel'
import FieldContent from './FieldContent'
import TrainButton from './TrainButton'

const QuizInfo = ({ quiz, onInitRunner, runnerStatus }) =>
  <Wrapper>
    <TrainButton
      onClick={() => onInitRunner(quiz)}
    >
      Train
    </TrainButton>
    <FieldWrapper>
      <FieldLabel>name:</FieldLabel>
      <FieldContent>{quiz.name}</FieldContent>
    </FieldWrapper>
    <FieldWrapper>
      <FieldLabel>type:</FieldLabel>
      <FieldContent>{quiz.type}</FieldContent>
    </FieldWrapper>
    {runnerStatus !== statusMap.EMPTY &&
      <Runner />
    }
  </Wrapper>


QuizInfo.propTypes = {
  quiz: quizShape.isRequired,
  runnerStatus: pt.string.isRequired,
  onInitRunner: pt.func.isRequired,
}

export default QuizInfo
