import React from 'react'

import StaticString from 'components/presentational/EditorPage/Form/StaticString'

import FieldWrapper from 'components/reusable/FieldWrapper'

const TypeField = () =>
  <FieldWrapper label="type">
    <StaticString name="type" />
  </FieldWrapper>

export default TypeField
