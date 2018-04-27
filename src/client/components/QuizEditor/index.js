import React from 'react'
import pt from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'ramda'
import quizShape from 'propShapes/quiz'

import withLoading from 'components/Loading'
import List from 'components/List'
import EditorSection from 'components/EditorSection'
import Wrapper from './Wrapper'
import withData from './enhancers'
import {
  selectQuiz,
  selectNewQuiz,
  updateQuiz,
  updateBuffer,
} from './reducer'

const QuizEditor = ({
  quizzes,
  selectedQuizId,
  onSelectQuiz,
  onSelectNewQuiz,
  original,
  buffer,
  onUpdateBuffer,
  mode,
  onCreate,
  onUpdate,
}) =>
  <Wrapper>
    <List
      items={quizzes}
      selectedItemId={selectedQuizId}
      onSelectItem={onSelectQuiz}
    />
    <EditorSection
      {...{
        mode,
        original,
        buffer,
        onUpdateBuffer,
        onSelectNewQuiz,
        onCreate,
        onUpdate,
      }}
    />
  </Wrapper>

QuizEditor.propTypes = {
  quizzes: pt.arrayOf(quizShape).isRequired,
  selectedQuizId: pt.string,
  onSelectQuiz: pt.func.isRequired,
  onSelectNewQuiz: pt.func.isRequired,
  original: quizShape,
  buffer: quizShape,
  onUpdateBuffer: pt.func.isRequired,
  mode: pt.string.isRequired,
  onCreate: pt.func.isRequired,
  onUpdate: pt.func.isRequired,
}

QuizEditor.defaultProps = {
  selectedQuizId: undefined,
  original: undefined,
  buffer: undefined,
}

const mapStateToProps = state => ({
  selectedQuizId: state.editor.selectedQuizId,
  original: state.editor.original,
  buffer: state.editor.buffer,
  mode: state.editor.mode,
})

const handleCreateMutation = (dispatch, mutation, quiz) =>
  mutation(quiz).then(res =>
    dispatch(selectQuiz(res.data.createQuiz)))

const handleUpdateMutation = (dispatch, mutation, quiz) =>
  mutation(quiz).then(res =>
    dispatch(updateQuiz(res.data.updateQuiz)))

const mapDispatchToProps = (dispatch, ownProps) => {
  const { createMutation, updateMutation } = ownProps

  return {
    onSelectQuiz: qz => dispatch(selectQuiz(qz)),
    onSelectNewQuiz: () => dispatch(selectNewQuiz()),
    onCreate: qz => handleCreateMutation(dispatch, createMutation, qz),
    onUpdate: qz => handleUpdateMutation(dispatch, updateMutation, qz),
    onUpdateBuffer: (k, v) => dispatch(updateBuffer(k, v)),
  }
}


export default compose(
  withData,
  connect(mapStateToProps, mapDispatchToProps),
  withLoading,
)(QuizEditor)
