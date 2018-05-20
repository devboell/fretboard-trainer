import React from 'react'
import pt from 'prop-types'

import { connect } from 'react-redux'
import quizShape from 'propShapes/quiz'
import getQuestion from 'lib/question'

import PanelMode from 'components/PanelMode'
import PanelModeButton from './PanelModeButton'
import StartButton from './StartButton'
import { startRunner } from './reducer'

const Runner = ({ quiz, question, onStartRunner }) =>
  <div>
    <p>{quiz.name}</p>
    <div>
      {quiz.panelModes.map(pm =>
        <PanelModeButton>
          <PanelMode panelMode={pm} />
        </PanelModeButton>)
      }
    </div>
    {question &&
      <p>{question.entity.name}</p>
    }
    <StartButton onClick={onStartRunner}>
      Start
    </StartButton>
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
