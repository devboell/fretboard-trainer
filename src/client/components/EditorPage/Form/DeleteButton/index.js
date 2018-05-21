import React from 'react'
import pt from 'prop-types'

import { FormContext } from 'components/Form'

const DeleteButton = ({ children, className }) =>
  <FormContext.Consumer>
    {context =>
      <button
        className={className}
        onClick={context.handleDelete}
        disabled={context.isNew}
      >
        {children}
      </button>
    }
  </FormContext.Consumer>

DeleteButton.propTypes = {
  className: pt.string.isRequired,
  children: pt.node.isRequired,
}

export default DeleteButton
