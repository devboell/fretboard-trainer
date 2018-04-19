import React from 'react'
import Fretboard from 'react-fretboard'
import quizShape from 'propShapes/quiz'

import Wrapper from './Wrapper'


const QuizView = ({
  quiz,
}) =>
  <Wrapper>
    {quiz.name}
    <Fretboard />
  </Wrapper>

QuizView.propTypes = {
  quiz: quizShape.isRequired,
}


export default QuizView
