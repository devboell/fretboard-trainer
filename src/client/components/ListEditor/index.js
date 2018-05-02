import React from 'react'

import Wrapper from './Wrapper'
import ListContainer from './ListContainer'
import EditorContainer from './EditorContainer'


const ListEditor = () =>
  <Wrapper>
    <ListContainer />
    <EditorContainer />
  </Wrapper>

ListEditor.propTypes = {
}

export default ListEditor
