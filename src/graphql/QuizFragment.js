import gql from 'graphql-tag'

export default gql`
  fragment QuizFragment on Quiz {
    id
    name
    description
    type
    tuning
    width
    allAnswers
    allowIncorrect
    useTimer,
    time,
    showNotes,
    highlightOctaves,
    __typename
    panelModes {
      id
      question
      answer
    }
  }
`
