import React from 'react'

import InputCheckbox from 'components/presentational/EditorPage/Form/InputCheckbox'

import FieldWrapper from 'components/reusable/FieldWrapper'

const HighlightOctavesField = () =>
  <FieldWrapper label="highlight octaves">
    <InputCheckbox name="highlightOctaves" />
  </FieldWrapper>

export default HighlightOctavesField
