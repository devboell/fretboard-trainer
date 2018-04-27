import gql from 'graphql-tag'

export const CREATE_QUIZ = gql`
  mutation CreateQuiz(
    $name: String,
    $type: QuizTypeEnum
  ) {
    createQuiz(
      name: $name,
      type: $type
    ) {
      id
      name
      type
    }
  }
`

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

