import gql from 'graphql-tag'

export const CREATE_QUIZ = gql`
  mutation CreateQuiz(
    $name: String,
    $type: QuizTypeEnum,
    $tuning: TuningEnum,
    $width: Int
  ) {
    createQuiz(
      name: $name,
      type: $type,
      tuning: $tuning,
      width: $width
    ) {
      id
      name
      type
      tuning
      width
    }
  }
`

export const UPDATE_QUIZ = gql`
  mutation UpdateQuiz(
    $id: ID,
    $name: String,
    $type: QuizTypeEnum,
    $tuning: TuningEnum,
    $width: Int
  ) {
    updateQuiz(
      id: $id,
      name: $name,
      type: $type,
      tuning: $tuning,
      width: $width
    ) {
      id
      name
      type
      tuning
      width
    }
  }
`

export const DELETE_QUIZ = gql`
  mutation DeleteQuiz($id: ID) {
    deleteQuiz(id: $id)
  }
`
