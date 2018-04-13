import React from 'react'
import pt from 'prop-types'
import { equals } from 'ramda'

import EditorButton from 'styled/EditorButton'
import Form from './Form'
import FieldsWrapper from './FieldsWrapper'
import ButtonsWrapper from './ButtonsWrapper'
import Label from './Label'
import InputText from './InputText'

class QuizForm extends React.Component {
  static getDerivedStateFromProps(nextProps) {
    return nextProps.quiz
  }

  constructor(props) {
    super(props)
    this.state = {
      ...props.quiz,
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.hasChanges = this.hasChanges.bind(this)
  }

  handleInputChange(event) {
    const { target } = event
    const value = target.type === 'checkbox' ? target.checked : target.value
    const { name } = target

    this.setState({
      [name]: value,
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const { onCreateQuiz, onUpdateQuiz, isNew } = this.props

    if (isNew) {
      onCreateQuiz(this.state)
    } else {
      onUpdateQuiz(this.state)
    }
  }

  handleDelete(event) {
    const { onDeleteQuiz, clearQuizSelection } = this.props
    event.preventDefault()

    clearQuizSelection(false)
    onDeleteQuiz({ id: this.state.id })
  }

  hasChanges() {
    return !equals(this.props.quiz, this.state)
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FieldsWrapper>
          <Label htmlFor="name">
            name:
            <InputText
              id="name"
              name="name"
              type="text"
              placeholder="Enter a name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </Label>
        </FieldsWrapper>
        <ButtonsWrapper>
          <EditorButton
            type="submit"
            disabled={!this.hasChanges()}
          >
            Save
          </EditorButton>
          <EditorButton
            onClick={this.handleDelete}
            disabled={this.props.isNew}
          >
            Delete
          </EditorButton>
        </ButtonsWrapper>
      </Form>
    )
  }
}


QuizForm.propTypes = {
  quiz: pt.shape({ id: pt.string, name: pt.string }).isRequired,
  isNew: pt.bool.isRequired,
  onCreateQuiz: pt.func.isRequired,
  onUpdateQuiz: pt.func.isRequired,
  onDeleteQuiz: pt.func.isRequired,
  clearQuizSelection: pt.func.isRequired,
}

export default QuizForm
