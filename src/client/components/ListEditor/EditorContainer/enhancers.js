import { graphql, compose } from 'react-apollo'

import QUIZZES from 'graphql/Quizzes'
import PANEL_MODES from 'graphql/PanelModes'
import CREATE_QUIZ from 'graphql/CreateQuiz'
import UPDATE_QUIZ from 'graphql/UpdateQuiz'
import DELETE_QUIZ from 'graphql/DeleteQuiz'


const panelModesQueryProps = ({ data: { panelModes, loading, error } }) => ({
  panelModes,
  loading,
  error,
})

const withPanelModes = graphql(
  PANEL_MODES,
  { props: panelModesQueryProps },
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

const deleteQuizProps = ({ mutate }) => ({
  deleteMutation: values => mutate({
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
  withCreateQuizMutation,
  withUpdateQuizMutation,
  withDeleteQuizMutation,
  withPanelModes,
)
