import React from 'react'
import pt from 'prop-types'

import quizShape from 'propShapes/quiz'
import Label from './Label'
import InputText from './InputText'
import Wrapper from './Wrapper'

const FormFields = ({ buffer, handleInputChange }) =>
  <Wrapper>
    <Label htmlFor="name">
      name:
      <InputText
        id="name"
        name="name"
        type="text"
        placeholder="Enter a name"
        value={buffer.name}
        onChange={handleInputChange}
      />
    </Label>
    <Label htmlFor="type">
      type:
      <input
        id="type"
        name="type"
        type="radio"
        value="pc"
        checked={buffer.type === 'pc'}
        onChange={handleInputChange}
      />
    </Label>
  </Wrapper>

FormFields.propTypes = {
  buffer: quizShape.isRequired,
  handleInputChange: pt.func.isRequired,
}


export default FormFields
