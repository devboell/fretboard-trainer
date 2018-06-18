import React from 'react'
import pt from 'prop-types'
import { compose } from 'ramda'
import { connect } from 'react-redux'
import { quizShape } from 'propShapes/quiz'

import Runner from 'components/Runner'
import { initRunner } from 'components/Runner/reducer' // resetRunner
import withLoading from 'components/Loading'
import withData from './enhancers'
import { toggleModal } from './reducer'
import StyledModal from './StyledModal'
import CloseButton from './CloseButton'
import closeImage from './images/close.png'

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
    <StyledModal
      isOpen={showModal}
    >
      <CloseButton onClick={() => onExitQuiz()}>
        <img src={closeImage} alt="Close quiz" />
      </CloseButton>
      <Runner />
    </StyledModal>
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
