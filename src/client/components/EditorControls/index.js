import React from 'react'
import pt from 'prop-types'

import NewButton from './NewButton'
import Wrapper from './Wrapper'

const EditorControls = ({ onSelectNewItem, isNew }) =>
  <Wrapper>
    <NewButton
      onClick={onSelectNewItem}
      disabled={isNew}
    >
      New
    </NewButton>
  </Wrapper>

EditorControls.propTypes = {
  onSelectNewItem: pt.func.isRequired,
  isNew: pt.bool.isRequired,
}


export default EditorControls
