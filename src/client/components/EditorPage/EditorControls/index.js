import React from 'react'
import pt from 'prop-types'

// import NewButton from './NewButton'
import NewButton from 'components/DropDownButton'
import PreviewButton from './PreviewButton'
import Wrapper from './Wrapper'

const quizTypes = ['pc', 'pitch']

const EditorControls = ({
  onSelectNewItem,
  onOpenPreview,
  isNew,
  hasSelection,
}) =>
  <Wrapper>
    <NewButton
      clickAction={onSelectNewItem}
      items={quizTypes}
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
