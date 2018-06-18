import React from 'react'
import pt from 'prop-types'
import { compose } from 'ramda'
import { connect } from 'react-redux'
import ReactModal from 'react-modal'
import { quizShape } from 'propShapes/quiz'

import Runner from 'components/Runner'
import { initRunner } from 'components/Runner/reducer' // resetRunner
import withLoading from 'components/Loading'
import withData from './enhancers'
import { toggleModal } from './reducer'

const selectQuiz = quiz =>
  (dispatch) => {
    dispatch(initRunner(quiz))
    dispatch(toggleModal())
  }

const exitQuiz = () =>
  (dispatch) => {
    dispatch(toggleModal())
    // disparch(resetRunner())
  }

const TrainingPage = ({
  quizzes,
  showModal,
  onSelectQuiz,
  onExitQuiz,
}) =>
  <ul>
    {quizzes.map(quiz =>
      <li
        onClick={() => onSelectQuiz(quiz)}
      >
        {quiz.name}
      </li>)
    }
    <ReactModal
      isOpen={showModal}
    >
      <button onClick={() => onExitQuiz()}>close</button>
      <Runner />
    </ReactModal>
  </ul>

TrainingPage.propTypes = {
  quizzes: pt.arrayOf(quizShape).isRequired,
  showModal: pt.bool.isRequired,
  onSelectQuiz: pt.func.isRequired,
  onExitQuiz: pt.func.isRequired,
}

const mapStateToProps = state => ({
  showModal: state.training.showModal,
})

const mapDispatchToProps = dispatch => ({
  onSelectQuiz: q => dispatch(selectQuiz(q)),
  onExitQuiz: () => dispatch(exitQuiz()),
})

export default compose(
  withData,
  connect(mapStateToProps, mapDispatchToProps),
  withLoading,
)(TrainingPage)
