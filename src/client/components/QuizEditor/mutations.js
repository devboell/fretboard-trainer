import gql from 'graphql-tag'

export const UPDATE_QUIZ = gql`
  mutation UpdateQuiz(
    $id: ID,
    $name: String,
    $type: QuizTypeEnum
  ) {
    updateQuiz(
      id: $id,
      name: $name,
      type: $type
    ) {
      id
      name
      type
    }
  }
`

