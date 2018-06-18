import { graphql } from 'react-apollo'

import QUIZZES from 'graphql/Quizzes'

// duplicate of ListContainer

const quizzesQueryProps = ({ data: { quizzes, loading, error } }) => ({
  quizzes,
  loading,
  error,
})

export default graphql(
  QUIZZES,
  { props: quizzesQueryProps },
)

