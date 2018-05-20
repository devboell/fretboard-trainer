import React from 'react'
import pt from 'prop-types'
import { contains } from 'ramda'
import { FormContext } from 'components/Form'

const InputCheckboxGroup = ({
  name,
  value,
  ...rest
}) =>
  <FormContext.Consumer>
    {context =>
      <input
        {...{ ...rest }}
        name={name}
        type="checkbox"
        value={value}
        onChange={context.handleCheckBoxGroupChange}
        checked={contains(value, context.buffer[name])}
      />
    }
  </FormContext.Consumer>

InputCheckboxGroup.propTypes = {
  name: pt.string.isRequired,
  value: pt.oneOfType([pt.string, pt.number]).isRequired,
}

export default InputCheckboxGroup
