import gql from 'graphql-tag'
import QUIZ_FRAGMENT from './QuizFragment'

export default gql`
    mutation UpdateQuiz(
    $input: UpdateQuizInput,
  ) {
    updateQuiz(
      input: $input
    ) {
      ...QuizFragment
    }
  }
  ${QUIZ_FRAGMENT}
`
