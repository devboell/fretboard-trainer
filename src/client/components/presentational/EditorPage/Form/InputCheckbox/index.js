import React from 'react'
import pt from 'prop-types'

import { FormContext } from 'components/presentational/EditorPage/Form'

const InputCheckbox = ({
  name,
  ...rest
}) =>
  <FormContext.Consumer>
    {context =>
      <input
        id={name}
        {...{ name, ...rest }}
        type="checkbox"
        onChange={context.handleInputChange}
        value={context.buffer[name]}
        checked={context.buffer[name]}
      />

    }
  </FormContext.Consumer>

InputCheckbox.propTypes = {
  name: pt.string.isRequired,
}

export default InputCheckbox
