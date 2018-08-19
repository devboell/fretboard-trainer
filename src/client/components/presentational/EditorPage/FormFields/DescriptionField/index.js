import React from 'react'

import FieldTitle from '../FieldTitle'
import FieldInput from '../FieldInput'
import FieldWrapper from '../FieldWrapper'
import DescriptionInput from './DescriptionInput'

const DescriptionField = () =>
  <FieldWrapper>
    <FieldTitle>
      description:
    </FieldTitle>
    <FieldInput>
      <DescriptionInput
        rows="3"
        cols="40"
        name="description"
        placeholder="Enter a description"
      />
    </FieldInput>
  </FieldWrapper>

export default DescriptionField
