import gql from 'graphql-tag'

export default gql`
  {
    quizzes {
      id
      name
      type
      tuning
      width
    }
  }
`

