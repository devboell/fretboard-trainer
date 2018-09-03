import React from 'react'
import pt from 'prop-types'
import { isEmpty } from 'ramda'
import { quizShape } from 'propShapes/quiz'
import { statusMap } from 'components/containers/Runner/reducer'
import Runner from 'components/containers/Runner'
import TrainingControls from 'components/presentational/TrainingPage/TrainingControls'
import EmptyListDetail from 'components/styled/EmptyListDetail'
import Wrapper from './Wrapper'
import FieldWrapper from './FieldWrapper'
import FieldLabel from './FieldLabel'
import FieldContent from './FieldContent'


const InfoViewer = ({ selectedItem, onInitRunner, runnerStatus }) => {
  const hasSelection = !isEmpty(selectedItem)

  return (
    <Wrapper>
      <TrainingControls
        {...{ onInitRunner, selectedItem, hasSelection }}
      />
      {hasSelection
        ?
          <div>

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
          </div>
        :
          <EmptyListDetail>
            Select a quiz to start training
          </EmptyListDetail>
      }
    </Wrapper>
  )
}


InfoViewer.propTypes = {
  selectedItem: quizShape,
  runnerStatus: pt.string.isRequired,
  onInitRunner: pt.func.isRequired,
}

InfoViewer.defaultProps = {
  selectedItem: {},
}

export default InfoViewer
