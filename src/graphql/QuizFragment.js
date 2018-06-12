import gql from 'graphql-tag'

export default gql`
  fragment QuizFragment on Quiz {
    id
    name
    type
    tuning
    width
    allAnswers
    allowIncorrect
    useTimer,
    time,
    __typename
    panelModes {
      id
      question
      answer
    }
  }
`
