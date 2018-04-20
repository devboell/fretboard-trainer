import { connect } from 'react-redux'
import { compose } from 'ramda'

import QuizEditorPage from 'components/QuizEditorPage'
import withLoading from 'components/Loading'
import withData from './enhancers'
import {
  setSelectedQuizId,
  setIsNew,
  setEditedQuiz,
  updateEditedQuiz,
} from './actionCreators'

const newQuiz = {
  id: undefined,
  name: '',
  type: 'pc',
  __typename: 'Quiz',
}

// const findQuiz = (id, quizzes) => quizzes.filter(qz => qz.id === id)[0]

const selectQuiz = dispatch => (quiz) => {
  dispatch(setSelectedQuizId(quiz.id))
  dispatch(setIsNew(false))
  dispatch(setEditedQuiz(quiz))
}

const selectNewQuiz = (dispatch) => {
  dispatch(setIsNew(true))
  dispatch(setSelectedQuizId('no_selection'))
  dispatch(setEditedQuiz(newQuiz))
}

const deselectQuiz = (dispatch) => {
  dispatch(setSelectedQuizId('no_selection'))
  dispatch(setEditedQuiz(undefined))
}

const selectedQuiz = (state, ownProps) => {
  const { quizzes } = ownProps
  const { selectedQuizId, isNew } = state.editor

  return isNew // eslint-disable-line no-nested-ternary
    ? newQuiz
    : quizzes
      ? quizzes.filter(q => q.id === selectedQuizId)[0]
      : undefined
}


const mapStateToProps = (state, ownProps) => ({
  selectedQuizId: state.editor.selectedQuizId,
  isNew: state.editor.isNew,
  editedQuiz: state.editor.editedQuiz,
  selectedQuiz: selectedQuiz(state, ownProps),
})

const mapDispatchToProps = dispatch => ({
  onSelectQuiz: quiz => selectQuiz(dispatch)(quiz),
  onSelectNewQuiz: () => selectNewQuiz(dispatch),
  onDeselectQuiz: () => deselectQuiz(dispatch),
  onUpdateEditedQuiz: (k, v) => dispatch(updateEditedQuiz(k, v)),
})


export default compose(
  withData,
  connect(mapStateToProps, mapDispatchToProps),
  withLoading,
)(QuizEditorPage)
