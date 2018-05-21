import React from 'react'
import pt from 'prop-types'
import { contains } from 'ramda'

import { FormContext } from 'components/EditorPage/Form'

const InputCheckbox = ({
  name,
  value,
  ...rest
}) =>
  <FormContext.Consumer>
    {context =>
      <input
        {...{ name, ...rest }}
        type="checkbox"
        onChange={context.handleInputChange}
        value={value}
        checked={contains(value, context.buffer[name])}
      />

    }
  </FormContext.Consumer>

InputCheckbox.propTypes = {
  name: pt.string.isRequired,
  value: pt.oneOfType([pt.string, pt.number]).isRequired,
}

export default InputCheckbox
