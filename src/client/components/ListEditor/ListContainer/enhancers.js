import { graphql } from 'react-apollo'

import QUIZZES from './queries'


const quizzesQueryProps = ({ data: { quizzes, loading, error } }) => ({
  items: quizzes,
  loading,
  error,
})

export default graphql(
  QUIZZES,
  { props: quizzesQueryProps },
)

