import React from 'react'

import InputCheckbox from 'components/presentational/EditorPage/Form/InputCheckbox'


import FieldWrapper from 'components/reusable/FieldWrapper'

const AllowIncorrectField = () =>
  <FieldWrapper label="allow incorrect">
    <InputCheckbox name="allowIncorrect" />
  </FieldWrapper>

export default AllowIncorrectField
