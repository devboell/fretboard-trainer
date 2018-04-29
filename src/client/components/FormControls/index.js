import React from 'react'
import pt from 'prop-types'

import Wrapper from './Wrapper'

import SaveButton from './SaveButton'
import DeleteButton from './DeleteButton'

const FormControls = ({ isPristine, isNew, handleDelete }) =>
  <Wrapper>
    <SaveButton
      type="submit"
      disabled={isPristine}
    >
      Save
    </SaveButton>
    <DeleteButton
      onClick={handleDelete}
      disabled={isNew}
    >
      Delete
    </DeleteButton>
  </Wrapper>

FormControls.propTypes = {
  isPristine: pt.bool.isRequired,
  isNew: pt.bool.isRequired,
  handleDelete: pt.func.isRequired,
}


export default FormControls
