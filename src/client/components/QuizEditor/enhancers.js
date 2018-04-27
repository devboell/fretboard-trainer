import { graphql, compose } from 'react-apollo'

import QUIZZES from './queries'
import { CREATE_QUIZ, UPDATE_QUIZ } from './mutations'


const quizzesQueryProps = ({ data: { quizzes, loading, error } }) => ({
  quizzes, loading, error,
})

export const withQuizzesQuery = graphql(
  QUIZZES,
  { props: quizzesQueryProps },
)

const createQuizProps = ({ mutate }) => ({
  createMutation: values => mutate({
    variables: values,
  }),
})

const createQuizQueryUpdate = (proxy, { data: { createQuiz } }) => {
  const { quizzes } = proxy.readQuery({ query: QUIZZES })
  const result = [...quizzes, createQuiz]

  proxy.writeQuery({ query: QUIZZES, data: { quizzes: result } })
}

const withCreateQuizMutation = graphql(
  CREATE_QUIZ,
  {
    props: createQuizProps,
    options: {
      update: createQuizQueryUpdate,
    },
  },
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
  withCreateQuizMutation,
  withUpdateQuizMutation,
)
