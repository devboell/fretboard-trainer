import React from 'react'

import StaticString from 'components/EditorPage/Form/StaticString'

import FieldTitle from '../FieldTitle'
import FieldInput from '../FieldInput'
import FieldWrapper from '../FieldWrapper'

const TypeField = () =>
  <FieldWrapper>
    <FieldTitle>
      type:
    </FieldTitle>
    <FieldInput>
      <StaticString name="type" />
    </FieldInput>
  </FieldWrapper>

export default TypeField
