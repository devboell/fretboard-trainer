import React from 'react'
import pt from 'prop-types'

import quizShape from 'propShapes/quiz'
import StyledForm from './StyledForm'
import Label from './Label'
import InputText from './InputText'

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
      buffer,
      onUpdate,
    } = this.props

    onUpdate(buffer)
  }

  render() {
    const { buffer } = this.props

    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <Label htmlFor="name">
          name:
          <InputText
            id="name"
            name="name"
            type="text"
            placeholder="Enter a name"
            value={buffer.name}
            onChange={this.handleInputChange}
          />
        </Label>
      </StyledForm>
    )
  }
}


Form.propTypes = {
  buffer: quizShape.isRequired,
  onUpdateBuffer: pt.func.isRequired,
  isPristine: pt.bool.isRequired,
  onUpdate: pt.func.isRequired,
}


export default Form
