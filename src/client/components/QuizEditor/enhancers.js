import { graphql } from 'react-apollo'

import QUIZZES from './queries'


const quizzesQueryProps = ({ data: { quizzes, loading, error } }) => ({
  quizzes, loading, error,
})

export const withQuizzesQuery = graphql(
  QUIZZES,
  { props: quizzesQueryProps },
)


export default withQuizzesQuery
