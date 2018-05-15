import gql from 'graphql-tag'

export default gql`
  mutation DeleteQuiz($id: ID) {
    deleteQuiz(id: $id)
  }
`
