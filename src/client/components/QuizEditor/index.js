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

const handleUpdateMutation = (dispatch, mutation, quiz) =>
  mutation(quiz).then(res =>
    dispatch(updateQuiz(res.data.updateQuiz)))

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSelectQuiz: id => dispatch(selectQuiz(ownProps.quizzes)(id)),
  onSelectNewQuiz: () => dispatch(selectNewQuiz()),
  onUpdate: qz => handleUpdateMutation(dispatch, ownProps.updateMutation, qz),
  onUpdateBuffer: (k, v) => dispatch(updateBuffer(k, v)),
})


export default compose(
  withData,
  connect(mapStateToProps, mapDispatchToProps),
  withLoading,
)(QuizEditor)
