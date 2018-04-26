import React from 'react'
import pt from 'prop-types'

import EditorButton from 'styled/EditorButton'
import Wrapper from './Wrapper'

const FormControls = ({ isPristine }) =>
  <Wrapper>
    <EditorButton
      type="submit"
      disabled={isPristine}
    >
      Save
    </EditorButton>
  </Wrapper>

FormControls.propTypes = {
  isPristine: pt.bool.isRequired,
}


export default FormControls
