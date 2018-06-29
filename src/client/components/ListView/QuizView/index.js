import React from 'react'

import { quizShape } from 'propShapes/quiz'

const QuizView = ({ quiz }) =>
  <div>{quiz.name}</div>


QuizView.propTypes = {
  quiz: quizShape.isRequired,
}

export default QuizView
