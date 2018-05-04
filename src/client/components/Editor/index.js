import React from 'react'
import pt from 'prop-types'
import { equals } from 'ramda'
import quizShape from 'propShapes/quiz'
import { modes } from 'components/ListEditor/EditorContainer/reducer'

import FormFields from 'components/FormFields'
import FormControls from 'components/FormControls'
import EditorControls from 'components/EditorControls'

import UnselectedMessage from './UnselectedMessage'

import Wrapper from './Wrapper'
import StyledForm from './StyledForm'

const Editor = ({
  mode,
  original,
  buffer,
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
        {...{
          onSelectNewItem, onOpenPreview, isNew, hasSelection,
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
          <FormFields />
          <FormControls />
        </StyledForm>
      }
    </Wrapper>
  )
}


Editor.propTypes = {
  mode: pt.string.isRequired,
  original: quizShape,
  buffer: quizShape,
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
