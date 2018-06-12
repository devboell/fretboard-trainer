import React from 'react'
import pt from 'prop-types'

import { FormContext } from 'components/EditorPage/Form'

const InputNumber = ({
  name,
  ...rest
}) =>
  <FormContext.Consumer>
    {context =>
      <input
        {...{ name, ...rest }}
        id={name}
        type="number"
        onChange={context.handleInputChange}
        value={context.buffer[name]}
      />
    }
  </FormContext.Consumer>

InputNumber.propTypes = {
  name: pt.string.isRequired,
}

export default InputNumber
