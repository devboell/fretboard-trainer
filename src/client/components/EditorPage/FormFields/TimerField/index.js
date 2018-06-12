import React from 'react'
import { FormContext } from 'components/EditorPage/Form'
import InputCheckbox from 'components/EditorPage/Form/InputCheckbox'
import InputNumber from 'components/EditorPage/Form/InputNumber'
import Label from '../Label'

import FieldTitle from '../FieldTitle'
import FieldInput from '../FieldInput'
import FieldWrapper from '../FieldWrapper'

const NameField = () =>
  <FieldWrapper>
    <FieldTitle>
      timer:
    </FieldTitle>
    <FieldInput>
      <FormContext.Consumer>
        {context =>
          <div>
            <Label>
              use timer
              <InputCheckbox name="useTimer" />
            </Label>
            {context.buffer.useTimer &&
              <Label>
                <InputNumber name="time" />
                ms
              </Label>
            }
          </div>
        }
      </FormContext.Consumer>
    </FieldInput>
  </FieldWrapper>

export default NameField
