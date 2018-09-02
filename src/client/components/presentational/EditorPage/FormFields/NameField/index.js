import React from 'react'

import FieldWrapper from '../FieldWrapper'
import NameInput from './NameInput'

const NameField = () =>
  <FieldWrapper label="name">
    <NameInput
      name="name"
      placeholder="Enter a name"
    />
  </FieldWrapper>

export default NameField
