import React from 'react'
import pt from 'prop-types'
import { isEmpty } from 'ramda'
import { quizShape } from 'propShapes/quiz'
import { statusMap } from 'components/containers/Runner/reducer'
import Runner from 'components/containers/Runner'
import TrainingControls from 'components/presentational/TrainingPage/TrainingControls'
import EmptyListDetail from 'components/styled/EmptyListDetail'
import Info from 'components/presentational/TrainingPage/Info'
import Wrapper from './Wrapper'


const InfoViewer = ({ selectedItem, onInitRunner, runnerStatus }) => {
  const hasSelection = !isEmpty(selectedItem)

  return (
    <Wrapper>
      <TrainingControls
        {...{ onInitRunner, selectedItem, hasSelection }}
      />
      {hasSelection
        ?
          <Info {...{ selectedItem }} />
        :
          <EmptyListDetail>
            Select a quiz to start training
          </EmptyListDetail>
      }
      {runnerStatus !== statusMap.EMPTY &&
        <Runner />
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
