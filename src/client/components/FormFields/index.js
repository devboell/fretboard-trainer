import React from 'react'
// import pt from 'prop-types'

// import quizShape from 'propShapes/quiz'
import Label from './Label'
import NameInput from './NameInput'
import Wrapper from './Wrapper'

const FormFields = () =>
  <Wrapper>
    <Label htmlFor="name">
      name:
      <NameInput
        name="name"
        placeholder="Enter a name"
      />
    </Label>

  </Wrapper>

FormFields.propTypes = {
  // buffer: quizShape.isRequired,
  // handleInputChange: pt.func.isRequired,
}
/**
 *     <Label htmlFor="type">
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
 */

export default FormFields
