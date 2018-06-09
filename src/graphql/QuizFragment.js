import gql from 'graphql-tag'

export default gql`
  fragment QuizFragment on Quiz {
    id
    name
    type
    tuning
    width
    allAnswers
    __typename
    panelModes {
      id
      question
      answer
    }
  }
`
