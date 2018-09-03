import React from 'react'
import { quizShape } from 'propShapes/quiz'

import FieldWrapper from 'components/reusable/FieldWrapper'
import Wrapper from './Wrapper'

const Info = ({ selectedItem }) =>
  <Wrapper>
    <FieldWrapper label="name">
      {selectedItem.name}
    </FieldWrapper>
    <FieldWrapper label="type">
      {selectedItem.type}
    </FieldWrapper>
    <FieldWrapper label="description">
      {selectedItem.description}
    </FieldWrapper>
  </Wrapper>

Info.propTypes = {
  selectedItem: quizShape.isRequired,
}

export default Info
