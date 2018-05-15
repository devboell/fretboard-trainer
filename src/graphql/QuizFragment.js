import gql from 'graphql-tag'

export default gql`
  fragment QuizFragment on Quiz {
    id
    name
    type
    tuning
    width
    __typename
    panels {
      id
      q
      a
    }
  }
`
