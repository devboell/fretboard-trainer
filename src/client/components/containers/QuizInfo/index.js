import React from 'react'
import pt from 'prop-types'
import { isEmpty } from 'ramda'
import { connect } from 'react-redux'
import { quizShape } from 'propShapes/quiz'
import { statusMap, initRunner } from 'components/containers/Runner/reducer'
import Runner from 'components/containers/Runner'
import Wrapper from './Wrapper'
import FieldWrapper from './FieldWrapper'
import FieldLabel from './FieldLabel'
import FieldContent from './FieldContent'
import TrainButton from './TrainButton'

const QuizInfo = ({ selectedItem, onInitRunner, runnerStatus }) =>
  (!isEmpty(selectedItem) ?
    <Wrapper>
      <TrainButton
        onClick={() => onInitRunner(selectedItem)}
      >
        Train
      </TrainButton>
      <FieldWrapper>
        <FieldLabel>name:</FieldLabel>
        <FieldContent>{selectedItem.name}</FieldContent>
      </FieldWrapper>
      <FieldWrapper>
        <FieldLabel>type:</FieldLabel>
        <FieldContent>{selectedItem.type}</FieldContent>
      </FieldWrapper>
      <FieldWrapper>
        <FieldLabel>description:</FieldLabel>
        <FieldContent>{selectedItem.description}</FieldContent>
      </FieldWrapper>
      {runnerStatus !== statusMap.EMPTY &&
        <Runner />
      }
    </Wrapper>
    : null)


QuizInfo.propTypes = {
  selectedItem: quizShape,
  runnerStatus: pt.string.isRequired,
  onInitRunner: pt.func.isRequired,
}

QuizInfo.defaultProps = {
  selectedItem: {},
}

const mapStateToProps = state => ({
  runnerStatus: state.runner.status,
})

const mapDispatchToProps = dispatch => ({
  onInitRunner: qz => dispatch(initRunner(qz)),
})

export default connect(mapStateToProps, mapDispatchToProps)(QuizInfo)
