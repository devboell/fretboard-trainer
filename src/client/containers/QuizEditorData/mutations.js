import gql from 'graphql-tag'

export const CREATE_QUIZ = gql`
  mutation CreateQuiz($name: String) {
    createQuiz(name: $name) {
      id
      name
    }
  }
`

export const UPDATE_QUIZ = gql`
  mutation UpdateQuiz($id: ID, $name: String) {
    updateQuiz(id: $id, name: $name) {
      id
      name
    }
  }
`

export const DELETE_QUIZ = gql`
  mutation DeleteQuiz($id: ID) {
    deleteQuiz(id: $id)
  }
`
