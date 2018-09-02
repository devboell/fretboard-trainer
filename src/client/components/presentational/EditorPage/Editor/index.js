import React from 'react'
import pt from 'prop-types'
import { equals } from 'ramda'
import { quizShape } from 'propShapes/quiz'
import { modes } from 'components/containers/QuizEditor/reducer'
import { statusMap } from 'components/containers/Runner/reducer'
import Runner from 'components/containers/Runner'
import FormFields from 'components/presentational/EditorPage/FormFields'
import FormControls from 'components/presentational/EditorPage/FormControls'
import EditorControls from 'components/presentational/EditorPage/EditorControls'

import UnselectedMessage from './UnselectedMessage'

import Wrapper from './Wrapper'
import StyledForm from './StyledForm'

const Editor = ({
  mode,
  original,
  buffer,
  runnerStatus,
  panelModes,
  onSelectNewItem,
  onOpenPreview,
  ...rest
}) => {
  const isNew = mode === modes.NEW
  const isPristine = equals(original, buffer)
  const hasSelection = mode !== modes.UNSELECTED

  return (
    <Wrapper>
      <EditorControls
        onOpenPreview={() => onOpenPreview(buffer, panelModes)}
        {...{
          onSelectNewItem, isNew, hasSelection,
        }}
      />
      {mode === modes.UNSELECTED
        ? <UnselectedMessage />
        :
        <StyledForm
          {...{
            buffer,
            isNew,
            isPristine,
            ...rest,
          }}
        >
          <FormFields
            panelModes={panelModes}
            quizType={original.type}
          />
          <FormControls />
        </StyledForm>
      }
      {runnerStatus !== statusMap.EMPTY &&
        <Runner />
      }
    </Wrapper>
  )
}


Editor.propTypes = {
  mode: pt.string.isRequired,
  original: quizShape,
  buffer: quizShape,
  runnerStatus: pt.string.isRequired,
  panelModes: pt.arrayOf(pt.shape({})).isRequired,
  onUpdateBuffer: pt.func.isRequired,
  onSelectNewItem: pt.func.isRequired,
  onOpenPreview: pt.func.isRequired,
  onCreate: pt.func.isRequired,
  onUpdate: pt.func.isRequired,
  onDelete: pt.func.isRequired,
}

Editor.defaultProps = {
  original: undefined,
  buffer: undefined,
}

export default Editor
