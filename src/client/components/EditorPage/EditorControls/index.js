import React from 'react'
import pt from 'prop-types'

import NewButton from './NewButton'
import PreviewButton from './PreviewButton'
import Wrapper from './Wrapper'

const EditorControls = ({
  onSelectNewItem,
  onOpenPreview,
  isNew,
  hasSelection,
}) =>
  <Wrapper>
    <NewButton
      onClick={onSelectNewItem}
      disabled={isNew}
    >
      New
    </NewButton>
    <PreviewButton
      onClick={() => onOpenPreview()}
      disabled={!hasSelection}
    >
      Preview
    </PreviewButton>
  </Wrapper>

EditorControls.propTypes = {
  onSelectNewItem: pt.func.isRequired,
  onOpenPreview: pt.func.isRequired,
  isNew: pt.bool.isRequired,
  hasSelection: pt.bool.isRequired,
}


export default EditorControls
