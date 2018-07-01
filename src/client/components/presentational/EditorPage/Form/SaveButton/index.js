import React from 'react'
import pt from 'prop-types'

import { FormContext } from 'components/presentational/EditorPage/Form'

const SaveButton = ({ children, className }) =>
  <FormContext.Consumer>
    {context =>
      <button
        className={className}
        type="submit"
        disabled={context.isPristine}
      >
        {children}
      </button>
    }
  </FormContext.Consumer>

SaveButton.propTypes = {
  className: pt.string.isRequired,
  children: pt.node.isRequired,
}

export default SaveButton
