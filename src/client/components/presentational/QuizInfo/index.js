import React from 'react'
import pt from 'prop-types'
import { quizShape } from 'propShapes/quiz'
import { statusMap } from 'components/containers/Runner/reducer'
import Runner from 'components/containers/Runner'

const QuizInfo = ({ quiz, onInitRunner, runnerStatus }) =>
  <div>
    <button onClick={() => onInitRunner(quiz)}>Train</button>
    <div>{quiz.name}</div>
    {runnerStatus !== statusMap.EMPTY &&
      <Runner />
    }
  </div>


QuizInfo.propTypes = {
  quiz: quizShape.isRequired,
  runnerStatus: pt.string.isRequired,
  onInitRunner: pt.func.isRequired,
}

export default QuizInfo
