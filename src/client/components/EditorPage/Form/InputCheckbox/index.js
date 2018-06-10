import React from 'react'
import pt from 'prop-types'

import { FormContext } from 'components/EditorPage/Form'

const InputCheckbox = ({
  name,
  ...rest
}) =>
  <FormContext.Consumer>
    {context =>
      <input
        {...{ name, ...rest }}
        type="checkbox"
        onChange={context.handleInputChange}
        checked={context.buffer[name]}
      />

    }
  </FormContext.Consumer>

InputCheckbox.propTypes = {
  name: pt.string.isRequired,
  value: pt.oneOfType([pt.string, pt.number]).isRequired,
}

export default InputCheckbox
