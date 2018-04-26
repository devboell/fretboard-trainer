import React from 'react'
import pt from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'ramda'
import quizShape from 'propShapes/quiz'

import withLoading from 'components/Loading'
import List from 'components/List'
import Editor from 'components/Editor'
import Wrapper from './Wrapper'
import UnselectedMessage from './UnselectedMessage'
import withData from './enhancers'
import {
  selectQuiz,
  updateQuiz,
  updateBuffer,
  modes,
} from './reducer'

const QuizEditor = ({
  quizzes,
  selectedQuizId,
  onSelectQuiz,
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
    {mode === modes.UNSELECTED
      ? <UnselectedMessage />
      : <Editor
        {...{
          original,
          buffer,
          onUpdateBuffer,
          onUpdate,
        }}
      />
    }
  </Wrapper>

QuizEditor.propTypes = {
  quizzes: pt.arrayOf(quizShape).isRequired,
  selectedQuizId: pt.string,
  onSelectQuiz: pt.func.isRequired,
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
  onUpdate: qz => handleUpdateMutation(dispatch, ownProps.updateMutation, qz),
  onUpdateBuffer: (k, v) => dispatch(updateBuffer(k, v)),
})


export default compose(
  withData,
  connect(mapStateToProps, mapDispatchToProps),
  withLoading,
)(QuizEditor)
