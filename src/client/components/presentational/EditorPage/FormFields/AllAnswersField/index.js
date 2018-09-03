import React from 'react'

import InputCheckbox from 'components/presentational/EditorPage/Form/InputCheckbox'

import FieldWrapper from 'components/reusable/FieldWrapper'

const AllAnswersField = () =>
  <FieldWrapper label="all answers">
    <InputCheckbox name="allAnswers" />
  </FieldWrapper>

export default AllAnswersField
