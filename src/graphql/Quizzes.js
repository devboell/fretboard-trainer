import gql from 'graphql-tag'
import QUIZ_FRAGMENT from './QuizFragment'

export default gql`
  query Quizzes {
    quizzes {
      ...QuizFragment
    }
  }
  ${QUIZ_FRAGMENT}
`

