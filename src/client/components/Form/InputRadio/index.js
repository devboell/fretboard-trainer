import React from 'react'
import pt from 'prop-types'

import { FormContext } from 'components/Form'

const InputRadio = ({
  name,
  value,
  ...rest
}) =>
  <FormContext.Consumer>
    {context =>
      <input
        {...{ name, ...rest }}
        id={name}
        type="radio"
        onChange={context.handleInputChange}
        value={value}
        checked={context.buffer[name] === value}
      />
    }
  </FormContext.Consumer>

InputRadio.propTypes = {
  name: pt.string.isRequired,
  value: pt.string.isRequired,
}

export default InputRadio
