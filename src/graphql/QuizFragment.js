import gql from 'graphql-tag'

export default gql`
  fragment QuizFragment on Quiz {
    id
    name
    type
    tuning
    width
    __typename
    timer {
      type
      pause
      time
    }
    panelModes {
      id
      question
      answer
    }
  }
`
