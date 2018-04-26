import { graphql, compose } from 'react-apollo'

import QUIZZES from './queries'
import { UPDATE_QUIZ } from './mutations'


const quizzesQueryProps = ({ data: { quizzes, loading, error } }) => ({
  quizzes, loading, error,
})

export const withQuizzesQuery = graphql(
  QUIZZES,
  { props: quizzesQueryProps },
)

const updateQuizProps = ({ mutate }) => ({
  updateMutation: values => mutate({
    variables: values,
  }),
})

const withUpdateQuizMutation = graphql(
  UPDATE_QUIZ,
  { props: updateQuizProps },
)

export default compose(
  withQuizzesQuery,
  withUpdateQuizMutation,
)
