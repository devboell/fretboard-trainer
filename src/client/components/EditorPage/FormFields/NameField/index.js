import React from 'react'

import FieldTitle from '../FieldTitle'
import FieldInput from '../FieldInput'
import FieldWrapper from '../FieldWrapper'
import NameInput from './NameInput'

const NameField = () =>
  <FieldWrapper>
    <FieldTitle>
      name:
    </FieldTitle>
    <FieldInput>
      <NameInput
        name="name"
        placeholder="Enter a name"
      />
    </FieldInput>
  </FieldWrapper>

export default NameField
