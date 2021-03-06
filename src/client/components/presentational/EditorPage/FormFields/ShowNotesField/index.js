import React from 'react'

import InputCheckbox from 'components/presentational/EditorPage/Form/InputCheckbox'

import FieldWrapper from 'components/reusable/FieldWrapper'

const ShowNotesField = () =>
  <FieldWrapper label="show notes">
    <InputCheckbox name="showNotes" />
  </FieldWrapper>

export default ShowNotesField
