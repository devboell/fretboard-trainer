import React from 'react'
import pt from 'prop-types'

import { connect } from 'react-redux'
import quizShape from 'propShapes/quiz'
import getQuestion from 'lib/question'
import { startRunner } from './reducer'

const Runner = ({ quiz, question, onStartRunner }) =>
  <div>
    <p>{quiz.name}</p>
    <p>{question}</p>
    <button onClick={onStartRunner}>
      Start
    </button>
  </div>

Runner.propTypes = {
  quiz: quizShape.isRequired,
  question: pt.shape({}),
  onStartRunner: pt.func.isRequired,
}

Runner.defaultProps = {
  question: undefined,
}

const mapStateToProps = state => ({
  quiz: state.runner.quiz,
  question: state.runner.question,
})

const mapDispatchToProps = dispatch => ({
  onStartRunner: question => dispatch(startRunner(question)),
})

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  onStartRunner: () => dispatchProps.onStartRunner(getQuestion(stateProps.quiz)),
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Runner)
