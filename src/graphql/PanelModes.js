import gql from 'graphql-tag'

export default gql`
  query PanelModes {
    panelModes {
      id
      question
      answer
    }
  }
`
