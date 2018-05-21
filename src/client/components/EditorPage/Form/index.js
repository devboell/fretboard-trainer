import React from 'react'
import pt from 'prop-types'

import quizShape from 'propShapes/quiz'

export const FormContext = React.createContext()

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleCheckBoxGroupChange = this.handleCheckBoxGroupChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleInputChange(event) {
    const { onUpdateBuffer } = this.props
    const { target } = event
    const value = target.type === 'checkbox' ? target.checked : target.value
    const { name } = target

    onUpdateBuffer(name, value, 'SET')
  }

  handleCheckBoxGroupChange(event) {
    const { onUpdateBuffer } = this.props
    const { target } = event
    const { name, value, checked } = target
    const updateType = checked ? 'ADD' : 'REMOVE'

    onUpdateBuffer(name, value, updateType)
  }

  handleSubmit(event) {
    event.preventDefault()
    const {
      isNew,
      buffer,
      onCreate,
      onUpdate,
    } = this.props

    isNew
      ? onCreate(buffer)
      : onUpdate(buffer)
  }

  handleDelete(event) {
    const { onDelete, buffer } = this.props
    event.preventDefault()

    onDelete({ id: buffer.id })
  }

  render() {
    const {
      buffer,
      isPristine,
      isNew,
      className,
    } = this.props
    const context = {
      buffer,
      isPristine,
      isNew,
      handleInputChange: this.handleInputChange,
      handleCheckBoxGroupChange: this.handleCheckBoxGroupChange,
      handleDelete: this.handleDelete,
    }
    return (
      <form
        className={className}
        onSubmit={this.handleSubmit}
      >
        <FormContext.Provider value={context}>
          {this.props.children}
        </FormContext.Provider>
      </form>
    )
  }
}


Form.propTypes = {
  isNew: pt.bool.isRequired,
  buffer: quizShape.isRequired,
  onUpdateBuffer: pt.func.isRequired,
  isPristine: pt.bool.isRequired,
  onCreate: pt.func.isRequired,
  onUpdate: pt.func.isRequired,
  onDelete: pt.func.isRequired,
  className: pt.string.isRequired,
  children: pt.node.isRequired,
}


export default Form
