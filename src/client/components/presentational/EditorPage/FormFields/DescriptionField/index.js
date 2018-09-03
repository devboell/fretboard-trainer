import React from 'react'

import FieldWrapper from 'components/reusable/FieldWrapper'
import DescriptionInput from './DescriptionInput'

const DescriptionField = () =>
  <FieldWrapper label="description">
    <DescriptionInput
      rows="3"
      cols="40"
      name="description"
      placeholder="Enter a description"
    />
  </FieldWrapper>

export default DescriptionField
