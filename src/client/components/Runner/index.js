import { connect } from 'react-redux'
import { contains, equals, intersection, isEmpty } from 'ramda'
import getQuestion from 'lib/question'
import { equalsIgnoreOrder } from 'lib/runner'
import QuizView from 'components/QuizView'
import {
  startRunner,
  stopRunner,
  setQuestion,
  selectPanelModeIdx,
  addCorrectAnswer,
  addIncorrectAnswer,
  incrementElapsedTime,
} from './reducer'
import { isFretboardAnswer } from './selectors'

let timer
let ticker

const nextQuestion = () =>
  (dispatch, getState) => {
    const { runner: { quiz } } = getState()
    dispatch(setQuestion(getQuestion(quiz)))
    if (quiz.useTimer) {
      clearTimeout(timer)
      clearInterval(ticker)
      timer = setTimeout(
        () => dispatch(nextQuestion()),
        quiz.time * 1000,
      )
      ticker = setInterval(
        () => dispatch(incrementElapsedTime(1000)),
        1000,
      )
    }
  }

const startQuiz = () =>
  (dispatch) => {
    dispatch(nextQuestion())
    dispatch(startRunner())
  }

export const stopQuiz = () =>
  (dispatch) => {
    clearTimeout(timer)
    clearInterval(ticker)
    dispatch(stopRunner())
  }

const fretboardCompletion = (quiz, question, answers) => (
  quiz.allAnswers
    ? equalsIgnoreOrder(answers.correct, question.evaluation.locs)
    : !isEmpty(intersection(answers.correct, question.evaluation.locs)))

/* eslint-disable no-nested-ternary */
const handleCompletion = (quiz, evaluation, state, question, answers) => (
  !quiz.allowIncorrect && !evaluation
    ? true
    : isFretboardAnswer(state)
      ? fretboardCompletion(quiz, question, answers)
      : equals(answers.correct[0], question.evaluation.entity))

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

    const completed = handleCompletion(quiz, evaluation, state, question, answers)

    if (completed) {
      setTimeout(
        () => dispatch(nextQuestion()),
        500,
      )
    }
  }

const mapStateToProps = state => ({
  quiz: state.runner.quiz,
  question: state.runner.question,
  selectedPanelModeIdx: state.runner.selectedPanelModeIdx,
  answers: state.runner.answers,
  status: state.runner.status,
  elapsedTime: state.runner.elapsedTime,
})

const mapDispatchToProps = dispatch => ({
  onStartQuiz: () => dispatch(startQuiz()),
  onStopQuiz: () => dispatch(stopQuiz()),
  onSelectPanelModeIdx: idx => dispatch(selectPanelModeIdx(idx)),
  onSetAnswer: answer => dispatch(setAnswer(answer)),
})

export default connect(mapStateToProps, mapDispatchToProps)(QuizView)
