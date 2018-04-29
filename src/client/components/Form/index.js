import React from 'react'
import pt from 'prop-types'

import quizShape from 'propShapes/quiz'
import FormFields from 'components/FormFields'
import FormControls from 'components/FormControls'
import StyledForm from './StyledForm'


class Form extends React.Component {
  constructor(props) {
    super(props)

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleInputChange(event) {
    const { onUpdateBuffer } = this.props
    const { target } = event
    const value = target.type === 'checkbox' ? target.checked : target.value
    const { name } = target

    onUpdateBuffer(name, value)
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
    const { buffer, isPristine, isNew } = this.props

    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <FormFields
          buffer={buffer}
          handleInputChange={this.handleInputChange}
        />
        <FormControls
          {...{
            isPristine,
            isNew,
          }}
          handleDelete={this.handleDelete}
        />
      </StyledForm>
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
}


export default Form
