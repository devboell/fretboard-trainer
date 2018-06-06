import { connect } from 'react-redux'
import { contains, equals, intersection, isEmpty } from 'ramda'
import getQuestion from 'lib/question'

import QuizView from 'components/QuizView'
import {
  startRunner,
  selectPanelModeIdx,
  addCorrectAnswer,
  addIncorrectAnswer,
} from './reducer'
import { isFretboardAnswer } from './selectors'


const setAnswer = answer =>
  (dispatch, getState) => {
    const state = getState()
    const { runner: { question, quiz } } = state
    const evaluation = isFretboardAnswer(state)
      ? contains(answer, question.evaluation.locs)
      : equals(answer, question.evaluation.entity)

    evaluation
      ? dispatch(addCorrectAnswer(answer))
      : dispatch(addIncorrectAnswer(answer))

    const { runner: { answers } } = getState()
    const completed = isFretboardAnswer(state)
      ? !isEmpty(intersection(answers.correct, question.evaluation.locs))
      : equals(answers.correct[0], question.evaluation.entity)

    completed && dispatch(startRunner(getQuestion(quiz)))
  }

const mapStateToProps = state => ({
  quiz: state.runner.quiz,
  question: state.runner.question,
  selectedPanelModeIdx: state.runner.selectedPanelModeIdx,
  answers: state.runner.answers,
})

const mapDispatchToProps = dispatch => ({
  onStartRunner: question => dispatch(startRunner(question)),
  onSelectPanelModeIdx: idx => dispatch(selectPanelModeIdx(idx)),
  onSetAnswer: answer => dispatch(setAnswer(answer)),
})

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  onStartRunner: () => dispatchProps.onStartRunner(getQuestion(stateProps.quiz)),
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(QuizView)
