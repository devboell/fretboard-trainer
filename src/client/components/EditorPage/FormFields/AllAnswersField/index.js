import React from 'react'

import InputCheckbox from 'components/EditorPage/Form/InputCheckbox'

import FieldTitle from '../FieldTitle'
import FieldInput from '../FieldInput'
import FieldWrapper from '../FieldWrapper'

const AllAnswersField = () =>
  <FieldWrapper>
    <FieldTitle>
      all answers:
    </FieldTitle>
    <FieldInput>
      <InputCheckbox name="allAnswers" />
    </FieldInput>
  </FieldWrapper>

export default AllAnswersField