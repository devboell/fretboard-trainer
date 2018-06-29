import React from 'react'
import pt from 'prop-types'
import { quizShape } from 'propShapes/quiz'

const QuizView = ({ quiz, onInitRunner }) =>
  <div>
    <button onClick={() => onInitRunner(quiz)}>Train</button>
    <div>{quiz.name}</div>
  </div>


QuizView.propTypes = {
  quiz: quizShape.isRequired,
  onInitRunner: pt.func.isRequired,
}

export default QuizView
