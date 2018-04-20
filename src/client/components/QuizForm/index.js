import React from 'react'
import pt from 'prop-types'
import { equals } from 'ramda'

import quizShape from 'propShapes/quiz'

import EditorButton from 'styled/EditorButton'
import Form from './Form'
import FieldsWrapper from './FieldsWrapper'
import ButtonsWrapper from './ButtonsWrapper'
import Label from './Label'
import InputText from './InputText'

class QuizForm extends React.Component {
  constructor(props) {
    super(props)

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.hasChanges = this.hasChanges.bind(this)
  }

  handleInputChange(event) {
    const { onUpdateEditedQuiz } = this.props
    const { target } = event
    const value = target.type === 'checkbox' ? target.checked : target.value
    const { name } = target

    onUpdateEditedQuiz(name, value)
  }

  handleSubmit(event) {
    event.preventDefault()
    const {
      editedQuiz,
      onSelectQuiz,
      onCreateQuiz,
      onUpdateQuiz,
      isNew,
    } = this.props

    if (isNew) {
      onCreateQuiz(editedQuiz)
        .then(res => onSelectQuiz(res.data.createQuiz))
    } else {
      onUpdateQuiz(editedQuiz)
    }
  }

  handleDelete(event) {
    const { onDeleteQuiz, onDeselectQuiz, editedQuiz } = this.props
    event.preventDefault()

    onDeselectQuiz()
    onDeleteQuiz({ id: editedQuiz.id })
  }

  hasChanges() {
    const { selectedQuiz, editedQuiz } = this.props
    return !equals(selectedQuiz, editedQuiz)
  }

  render() {
    const { editedQuiz } = this.props

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
              value={editedQuiz.name}
              onChange={this.handleInputChange}
            />
          </Label>
          <Label htmlFor="type">
            type:
            <input
              id="type"
              name="type"
              type="radio"
              value="pc"
              checked={editedQuiz.type === 'pc'}
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
  selectedQuiz: quizShape.isRequired,
  editedQuiz: quizShape.isRequired,
  isNew: pt.bool.isRequired,
  onCreateQuiz: pt.func.isRequired,
  onUpdateQuiz: pt.func.isRequired,
  onDeleteQuiz: pt.func.isRequired,
  onSelectQuiz: pt.func.isRequired,
  onDeselectQuiz: pt.func.isRequired,
  onUpdateEditedQuiz: pt.func.isRequired,
}

export default QuizForm
