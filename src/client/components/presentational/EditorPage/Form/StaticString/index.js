import React from 'react'
import pt from 'prop-types'

import { FormContext } from 'components/presentational/EditorPage/Form'

const StaticString = ({
  name,
}) =>
  <FormContext.Consumer>
    {context =>
      <p>{context.buffer[name]}</p>
    }
  </FormContext.Consumer>

StaticString.propTypes = {
  name: pt.string.isRequired,
}

export default StaticString
