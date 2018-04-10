import gql from 'graphql-tag'

export const QUIZZES = gql`
  {
    quizzes {
      id
      name
    }
  }
`
export const CLIENT_UI = gql`
  {
    selectedQuizId @client
    isNew @client
  }
`
