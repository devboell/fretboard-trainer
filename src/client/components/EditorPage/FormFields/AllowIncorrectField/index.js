import React from 'react'

import InputCheckbox from 'components/EditorPage/Form/InputCheckbox'

import FieldTitle from '../FieldTitle'
import FieldInput from '../FieldInput'
import FieldWrapper from '../FieldWrapper'

const AllowIncorrectField = () =>
  <FieldWrapper>
    <FieldTitle>
      allow incorrect:
    </FieldTitle>
    <FieldInput>
      <InputCheckbox name="allowIncorrect" />
    </FieldInput>
  </FieldWrapper>

export default AllowIncorrectField
