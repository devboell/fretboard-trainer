import React from 'react'

import InputCheckbox from 'components/presentational/EditorPage/Form/InputCheckbox'

import FieldTitle from '../FieldTitle'
import FieldInput from '../FieldInput'
import FieldWrapper from '../FieldWrapper'

const ShowNotesField = () =>
  <FieldWrapper>
    <FieldTitle>
      show notes:
    </FieldTitle>
    <FieldInput>
      <InputCheckbox name="showNotes" />
    </FieldInput>
  </FieldWrapper>

export default ShowNotesField
