import { graphql, compose } from 'react-apollo'

import { QUIZZES, CLIENT_UI } from './queries'
import { CREATE_QUIZ, UPDATE_QUIZ, DELETE_QUIZ } from './mutations'


const quizzesQueryProps = ({ data: { quizzes, loading, error } }) => ({
  quizzes, loading, error,
})

const withQuizzesQuery = graphql(
  QUIZZES,
  { props: quizzesQueryProps },
)

const clientUIProps = ({ data: { selectedQuizId, isNew } }) => ({
  selectedQuizId, isNew,
})

const withClientUIQuery = graphql(
  CLIENT_UI,
  { props: clientUIProps },
)

const createQuizProps = ({ mutate }) => ({
  createQuiz: values => mutate({
    variables: values,
  }),
})

const createQuizQueryUpdate = (proxy, { data: { createQuiz } }) => {
  const { quizzes } = proxy.readQuery({ query: QUIZZES })
  const result = [...quizzes, createQuiz]

  proxy.writeQuery({ query: QUIZZES, data: { quizzes: result } })
  proxy.writeQuery({
    query: CLIENT_UI,
    data: {
      selectedQuizId: createQuiz.id,
      isNew: false,
    },
  })
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
  updateQuiz: values => mutate({
    variables: values,
  }),
})

const withUpdateQuizMutation = graphql(
  UPDATE_QUIZ,
  { props: updateQuizProps },
)

const deleteQuizProps = ({ mutate }) => ({
  deleteQuiz: values => mutate({
    variables: values,
  }),
})

const deleteQuizQueryUpdate = (proxy, { data: { deleteQuiz } }) => {
  const { quizzes } = proxy.readQuery({ query: QUIZZES })
  const result = quizzes.filter(q => q.id !== deleteQuiz)

  proxy.writeQuery({ query: QUIZZES, data: { quizzes: result } })
}

const withDeleteQuizMutation = graphql(
  DELETE_QUIZ,
  {
    props: deleteQuizProps,
    options: {
      update: deleteQuizQueryUpdate,
    },
  },
)


export default compose(
  withQuizzesQuery,
  withClientUIQuery,
  withUpdateQuizMutation,
  withCreateQuizMutation,
  withDeleteQuizMutation,
)
