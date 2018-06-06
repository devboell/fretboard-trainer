import React from 'react'
import pt from 'prop-types'

import { FormContext } from 'components/EditorPage/Form'

const InputText = ({
  name,
  ...rest
}) =>
  <FormContext.Consumer>
    {context =>
      <input
        {...{ name, ...rest }}
        path={['bla', 'blabla']}
        id={name}
        type="text"
        onChange={context.handleInputChange}
        value={context.buffer[name]}
      />
    }
  </FormContext.Consumer>

InputText.propTypes = {
  name: pt.string.isRequired,
}

export default InputText
