import gql from 'graphql-tag'
import QUIZ_FRAGMENT from './QuizFragment'

export default gql`
    mutation CreateQuiz(
    $input: CreateQuizInput,
  ) {
    createQuiz(
      input: $input
    ) {
      ...QuizFragment
    }
  }
  ${QUIZ_FRAGMENT}
`
