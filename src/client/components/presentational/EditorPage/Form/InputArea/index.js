import React from 'react'
import pt from 'prop-types'

import { FormContext } from 'components/presentational/EditorPage/Form'

const InputArea = ({
  name,
  ...rest
}) =>
  <FormContext.Consumer>
    {context =>
      <textarea
        {...{ name, ...rest }}
        id={name}
        type="text"
        onChange={context.handleInputChange}
        value={context.buffer[name]}
      />
    }
  </FormContext.Consumer>

InputArea.propTypes = {
  name: pt.string.isRequired,
}

export default InputArea
